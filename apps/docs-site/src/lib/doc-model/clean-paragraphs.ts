import type { Paragraph } from '@types';
import { condenseRichText } from './condense-rich-text';
import { trimLinebreak } from './trim-line-breaks';

export const cleanParagraphs = (paragraph: Paragraph): Paragraph => {
  return {
    type: 'paragraph',
    text: condenseRichText(trimLinebreak(paragraph.text)),
  };
};
