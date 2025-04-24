import type { RichText } from '@types';

type ArrayRichText = Exclude<RichText, string>;

const removeLinebreaksFromStart = (entry: ArrayRichText): ArrayRichText => {
  return entry.reduce<{ started: boolean; entries: ArrayRichText }>(
    (accum, item) => {
      const started =
        accum.started || typeof item === 'string' || item.type !== 'linebreak';

      return {
        started,
        entries: started ? [...accum.entries, item] : accum.entries,
      };
    },
    { started: false, entries: [] },
  ).entries;
};

export const trimLinebreak = (entry: RichText): RichText => {
  if (typeof entry === 'string') {
    return entry;
  }
  const startTrimmed = removeLinebreaksFromStart(entry);
  const reversed = startTrimmed.slice().reverse();
  const endTrimmed = removeLinebreaksFromStart(reversed);
  return endTrimmed.slice().reverse();
};
