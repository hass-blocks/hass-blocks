import type { Paragraph } from '@types';
import { condenseRichText } from './condense-rich-text';

export const condenseParagraphs = (paragraph: Paragraph): Paragraph => {
  return {
    type: 'paragraph',
    text: condenseRichText(paragraph.text),
  };
};
