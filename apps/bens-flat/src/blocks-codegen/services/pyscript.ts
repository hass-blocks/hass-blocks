import { serviceCall } from '@hass-blocks/core';

/**
 * https://github.com/dmamelin/pyscript_autocomplete
 */
export const autocompleteGeneratorPyscript = () =>
  serviceCall({
    name: `Call pyscript.autocomplete_generator`,
    params: {
      domain: 'pyscript',
      service: 'autocomplete_generator',
    },
  });

export interface HelloWorldPyscriptProps {
  /**
   * argument action
   */
  action?: never;
  /**
   * argument id
   */
  id?: never;
}

/**
 * hello_world example using pyscript.
 */
export const helloWorldPyscript = (params?: HelloWorldPyscriptProps) =>
  serviceCall({
    name: `Call pyscript.hello_world`,
    params: {
      domain: 'pyscript',
      service: 'hello_world',
      service_data: params,
    },
  });

export interface ReloadPyscriptProps {
  /**
   * Only reload this specific global context (file or app)
   */
  global_ctx?: string;
}

/**
 * Reloads all available pyscripts and restart triggers
 */
export const reloadPyscript = (params?: ReloadPyscriptProps) =>
  serviceCall({
    name: `Call pyscript.reload`,
    params: {
      domain: 'pyscript',
      service: 'reload',
      service_data: params,
    },
  });

export interface JupyterKernelStartPyscriptProps {
  /**
   * Shell port number
   */
  shell_port?: number;
  /**
   * IOPub port number
   */
  iopub_port?: number;
  /**
   * Stdin port number
   */
  stdin_port?: number;
  /**
   * Control port number
   */
  control_port?: number;
  /**
   * Heartbeat port number
   */
  hb_port?: number;
  /**
   * IP address to connect to Jupyter front end
   */
  ip?: string;
  /**
   * Used for signing
   */
  key: string;
  /**
   * Transport type
   */
  transport?: never;
  /**
   * Signing algorithm
   */
  signature_scheme?: never;
  /**
   * Kernel name
   */
  kernel_name: string;
}

/**
 * Starts a jupyter kernel for interactive use; Called by Jupyter front end and should generally not be used by users
 */
export const jupyterKernelStartPyscript = (
  params: JupyterKernelStartPyscriptProps,
) =>
  serviceCall({
    name: `Call pyscript.jupyter_kernel_start`,
    params: {
      domain: 'pyscript',
      service: 'jupyter_kernel_start',
      service_data: params,
    },
  });
