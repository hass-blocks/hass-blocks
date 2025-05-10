import { readFileSync, writeFileSync } from 'node:fs';
import type { IPackageJson } from 'package-json-type';

import { safeJsonParse } from '@utils';

export class PackageJsonFile {
  private data: IPackageJson;

  constructor(private path: string) {
    const contents = readFileSync(path, 'utf-8');
    this.data = safeJsonParse<IPackageJson>(contents);
  }

  public update(newFile: IPackageJson) {
    writeFileSync(this.path, JSON.stringify(newFile, null, 2));
    this.data = newFile;
  }

  public addDependency(name: string, version: string) {
    this.update({
      ...this.data,
      dependencies: { ...this.data.dependencies, [name]: version },
    });
  }

  public get(key: keyof IPackageJson) {
    return this.data[key];
  }

  public set(key: keyof IPackageJson, value: string) {
    this.update({
      ...this.data,
      [key]: value,
    });
  }
}
