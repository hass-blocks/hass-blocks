export interface ITriggerRegistry {
  registerTrigger: (
    trigger: Record<string, unknown>,
    callback: (event: unknown) => void | Promise<void>,
  ) => Promise<void>;
}
