import type { GlobalNames } from './global-names.ts';
import type { IGlobalName } from './i-global-name.ts';

export abstract class GlobalName {
  private actualName: string | undefined;

  public constructor(private allNames: GlobalNames) {}

  abstract generateName(): string;

  private findActualName() {
    const rawName = this.generateName();
    let foundName: IGlobalName | undefined;
    let suffix: string | number = '';

    let attempt = `${rawName}${suffix}`;
    do {
      attempt = `${rawName}${suffix}`;
      foundName = this.allNames.getByName(attempt);
      suffix = typeof suffix === 'string' ? 1 : suffix++;
    } while (typeof foundName !== 'undefined');
    return attempt;
  }

  public get name() {
    if (!this.actualName) {
      this.actualName = this.findActualName();
    }
    return this.actualName;
  }
}
