import { MarkdownRenderer } from 'ts-markdown';

export interface LineBreakEntry {
  linebreak: true;
}

export const lineBreakRenderer: MarkdownRenderer = () => {
  return '<br />';
};
