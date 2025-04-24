import type { RichText } from './rich-text.ts';

export interface Paragraph {
  type: 'paragraph';
  text: RichText;
}
