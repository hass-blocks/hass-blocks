import type { DocDeclarationReference } from '@microsoft/tsdoc';

export interface Link {
  type: 'link';
  text: string;
  link: string | DocDeclarationReference;
}
