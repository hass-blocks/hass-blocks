import type { IRawTSConfig } from '../lib/tsconfig-replace-paths/utils';

export const getPaths = (
  tsconfigData: IRawTSConfig | undefined,
): object | { paths: Record<string, string[]>; baseUrl: string } => {
  if (!tsconfigData) {
    return {};
  }

  if (!tsconfigData.compilerOptions) {
    return {};
  }

  const { paths, baseUrl } = tsconfigData.compilerOptions;

  if (!paths && baseUrl) {
    throw new Error(
      'baseUrl specified in tsconfig but no paths were specified',
    );
  }

  if (paths && !baseUrl) {
    throw new Error('paths specified in tsconfig but no baseUrl specified');
  }

  return {
    baseUrl,
    paths,
  };
};
