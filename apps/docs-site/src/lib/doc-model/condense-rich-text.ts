import type { RichText } from '@types';

export const condenseRichText = (text: RichText): RichText => {
  if (text.length === 0) {
    return [];
  }

  if (typeof text === 'string') {
    return text;
  }

  if (text.every((item) => typeof item === 'string')) {
    return text.join('').trim();
  }

  if (typeof text[0] === 'object') {
    const condensed = condenseRichText(text.slice(1));
    return [text[0], ...convertToArray(condensed)];
  }

  const notString = text.findIndex((item) => typeof item !== 'string');
  const nextIndex = notString > 0 ? notString : text.length;

  const start = condenseRichText(text.slice(0, nextIndex));
  const rest = condenseRichText(text.slice(nextIndex, text.length));
  return [...convertToArray(start), ...convertToArray(rest)];
};

const convertToArray = (text: RichText) => {
  return Array.isArray(text) ? text : [text];
};
