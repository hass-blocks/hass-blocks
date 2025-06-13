import type { PromiseExecutor } from '@nx/devkit';

type ExecutorConfig<TExecutor extends PromiseExecutor<unknown>> =
  TExecutor extends PromiseExecutor<infer Config> ? Config : never;

export type ExecutorTargets = Record<
  string,
  {
    cache: boolean;
    executor: string;
    outputs?: string[];
    options: unknown;
    dependsOn: string[];
    inputs: string[];
  }
>;

export const executorTarget = <TExecutor extends PromiseExecutor>({
  name,
  options,
  dependsOn,
  productionInputsOnly: production,
  includeDependenciesInInputs,
  outputs,
}: {
  name: string;
  executor: TExecutor;
  options: ExecutorConfig<TExecutor>;
  outputs?: string[];
  productionInputsOnly: boolean;
  dependsOn?: ExecutorTargets;
  includeDependenciesInInputs?: boolean;
}): ExecutorTargets => {
  const inputs = (input: string) =>
    includeDependenciesInInputs ? [`^${input}`, input] : [input];

  return {
    [name]: {
      cache: true,
      executor: `@hass-blocks/publisher:${name}`,
      ...(outputs ? { outputs } : {}),
      options,
      inputs: production ? inputs('production') : inputs('default'),
      dependsOn: dependsOn ? Object.keys(dependsOn) : [],
    },
  };
};
