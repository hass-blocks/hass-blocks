import WebSocket from 'ws';

import { normalisePath, safeJsonParse } from '@utils';
import { HassTsError, ErrorResponseError } from '@errors';
import type { Logger } from '@types';
import { ERRORS } from '@constants';

import type {
  ErrorResult,
  MessageFromServer,
  MessageToServer,
  Result,
} from './messages/index.ts';

export class WebsocketClient {
  private socket: WebSocket | undefined;
  private connected = false;
  private readonly path: string;
  private messageCallbacks: ((
    message: MessageFromServer,
  ) => void | Promise<void>)[] = [];
  private authCompleteCallbacks: [success: () => void, failure: () => void][] =
    [];
  private responseCallbacks = new Map<
    number,
    (message: Result<unknown> | ErrorResult) => void
  >();
  private id = 1;

  public constructor(
    private readonly host: string,
    private readonly port: number,
    path: string,
    private readonly token: string,
    private readonly logger: Logger,
  ) {
    this.path = normalisePath(path);
    if (this.token === '') {
      throw new HassTsError(ERRORS.tokenCannotBeAnEmptyString);
    }
    if (this.host === '') {
      throw new HassTsError(ERRORS.hostCannotBeAnEmptyString);
    }
    if (this.port < 0) {
      throw new HassTsError(ERRORS.portCannotBeNegative);
    }
  }

  public async init(): Promise<void> {
    this.socket = new WebSocket(`ws://${this.host}:${this.port}${this.path}`);
    this.socket.on('open', () => {
      this.socket?.on('message', async (data: Buffer) => {
        const message = safeJsonParse<MessageFromServer>(
          data.toString('utf-8'),
        );
        this.logger.trace(`Received (ws): ${JSON.stringify(message)}`);
        await this.handleMessage(message);
      });
    });
    await this.waitTillAuthFinished();
  }

  public async close(): Promise<void> {
    if (this.connected) {
      await this.waitTillAuthFinished();
      this.socket?.close();
    }
    this.socket = undefined;
  }

  public async sendCommand<T extends MessageToServer, R>(
    command: Omit<T, 'id'>,
  ): Promise<Result<R>> {
    if (!this.connected) {
      throw new HassTsError(ERRORS.notInitialised);
    }
    const id = this.id;
    this.id++;
    const responsePromise = this.waitForAndReturnResponse<T, R>(command, id);
    this.sendToSocket({ ...command, id });
    return await responsePromise;
  }

  public addMessageListener(
    listener: (message: MessageFromServer) => void | Promise<void>,
  ) {
    if (!this.connected) {
      throw new HassTsError(ERRORS.notInitialised);
    }
    this.messageCallbacks.push(listener);
  }

  public removeMessageListener(
    listener: (message: MessageFromServer) => void | Promise<void>,
  ) {
    if (!this.connected) {
      throw new HassTsError(ERRORS.notInitialised);
    }
    const registeredCallback = this.messageCallbacks.find(
      (callback) => callback === listener,
    );
    if (!registeredCallback) {
      throw new HassTsError(ERRORS.callbackNotRegistered);
    }
    this.messageCallbacks = this.messageCallbacks.filter(
      (callback) => callback !== listener,
    );
  }

  private async waitTillAuthFinished() {
    await new Promise<void>((accept, reject) => {
      if (!this.connected) {
        this.onAuthComplete(accept, () => {
          reject(new HassTsError(ERRORS.authenticationFailed));
        });
      } else {
        accept();
      }
    });
  }

  private async waitForAndReturnResponse<T extends MessageToServer, R>(
    command: Omit<T, 'id'>,
    id: number,
  ): Promise<Result<R>> {
    return await new Promise<Result<R>>((accept, reject) => {
      this.responseCallbacks.set(
        id,
        (response: Result<unknown> | ErrorResult) => {
          this.responseCallbacks.delete(id);
          if (response.success) {
            accept(response as Result<R>);
          } else {
            reject(
              new ErrorResponseError(
                response.error.code,
                JSON.stringify(command, null, 2),
                response.error.message,
              ),
            );
          }
        },
      );
    });
  }

  private sendToSocket<T extends Record<string, unknown>>(message: T) {
    this.logger.trace(`Sent (ws): ${JSON.stringify(message)}`);
    this.socket?.send(JSON.stringify(message));
  }

  private onAuthComplete(accept: () => void, reject: () => void) {
    this.authCompleteCallbacks.push([accept, reject]);
  }

  private handleAuthOk() {
    this.connected = true;
    this.authCompleteCallbacks.forEach(([successCallback]) => {
      successCallback();
    });
    this.authCompleteCallbacks = [];
  }

  private handleAuthInvalid() {
    this.authCompleteCallbacks.forEach(([, failureCallback]) => {
      failureCallback();
    });
    this.authCompleteCallbacks = [];
  }

  private handleAuthRequired() {
    this.sendToSocket({
      type: 'auth',
      access_token: this.token,
    });
  }

  private handleResult(message: Result<unknown> | ErrorResult) {
    const callback = this.responseCallbacks.get(message.id);
    callback?.(message);
  }

  private async handleOtherMessages(message: MessageFromServer) {
    await this.messageCallbacks.reduce(async (accum, callback) => {
      await accum;
      await callback(message);
    }, Promise.resolve());
  }

  private async handleMessage(message: MessageFromServer) {
    switch (message.type) {
      case 'auth_required':
        this.handleAuthRequired();
        break;
      case 'auth_ok':
        this.handleAuthOk();
        break;
      case 'auth_invalid':
        this.handleAuthInvalid();
        break;
      case 'result':
        this.handleResult(message);
        break;
      default:
        await this.handleOtherMessages(message);
    }
  }
}
