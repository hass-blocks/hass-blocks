import type { PromiseExecutor } from '@nx/devkit';

type ExecutorConfig<TExecutor extends PromiseExecutor<unknown>> =
  TExecutor extends PromiseExecutor<infer Config> ? Config : never;

export type ExecutorTargets = Record<
  string,
  {
    cache: boolean;
    executor: string;
    outputs: string[];
    options: unknown;
    dependsOn: string[];
  }
>;

export const executorTarget = <TExecutor extends PromiseExecutor>({
  name,
  options,
  dependsOn,
}: {
  name: string;
  executor: TExecutor;
  options: ExecutorConfig<TExecutor>;
  dependsOn?: ExecutorTargets;
}): ExecutorTargets => ({
  [name]: {
    cache: true,
    executor: `@hass-blocks/publisher:${name}`,
    outputs: ['{options.outputPath}'],
    options,
    dependsOn: dependsOn ? Object.keys(dependsOn) : [],
  },
});
