import { dirname, resolve, extname, format } from 'node:path';
import { readFileSync } from 'node:fs';
import { parse } from 'json5';

export interface IRawTSConfig {
  extends?: string;
  compilerOptions?: {
    baseUrl?: string;
    outDir?: string;
    rootDir?: string;
    paths?: { [key: string]: string[] };
  };
}

export interface ITSConfig {
  baseUrl?: string;
  outDir?: string;
  rootDir?: string;
  compilerOptions?: object;
  paths?: { [key: string]: string[] };
}

export const mapPaths = (
  paths: { [key: string]: string[] },
  mapper: (x: string) => string,
): { [key: string]: string[] } => {
  const dest = {} as { [key: string]: string[] };
  Object.keys(paths).forEach((key) => {
    if (paths[key]) {
      dest[key] = paths[key].map(mapper);
    }
  });
  return dest;
};

export const loadConfig = (file: string): ITSConfig => {
  const fileToParse = readFileSync(file, 'utf8');
  const parsedJsonFile = parse(fileToParse);

  const {
    extends: extendsPath,
    compilerOptions: { baseUrl, outDir, rootDir, paths } = {
      baseUrl: undefined,
      outDir: undefined,
      rootDir: undefined,
      paths: undefined,
    },
  } = parsedJsonFile as IRawTSConfig;

  const config: ITSConfig = {};
  if (baseUrl) {
    config.baseUrl = baseUrl;
  }
  if (outDir) {
    config.outDir = outDir;
  }
  if (rootDir) {
    config.rootDir = rootDir;
  }
  if (paths) {
    config.paths = paths;
  }
  if (extendsPath) {
    const childConfigDirPath = dirname(file);
    const parentConfigPath = resolve(childConfigDirPath, extendsPath);
    const parentConfigDirPath = dirname(parentConfigPath);
    const currentExtension = extname(parentConfigPath);

    let parentExtendedConfigFile = format({
      name: parentConfigPath,
      ext: currentExtension === '' ? '.json' : '',
    });

    /* Ensure without a doubt there's no double extension */
    if (/\.json\.json$/.test(parentExtendedConfigFile)) {
      parentExtendedConfigFile = parentExtendedConfigFile.replace(
        /\.json\.json$/,
        '.json',
      );
    }

    const parentConfig = loadConfig(parentExtendedConfigFile);

    if (parentConfig.baseUrl) {
      parentConfig.baseUrl = resolve(parentConfigDirPath, parentConfig.baseUrl);
    }

    return {
      ...parentConfig,
      ...config,
    };
  }

  return config;
};
