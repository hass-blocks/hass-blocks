import { RichTextEntry } from 'ts-markdown';

const removeLinebreaksFromStart = (entry: RichTextEntry) => {
  if (Array.isArray(entry)) {
    return entry.reduce(
      (accum, item) => {
        const started = accum.started || !item.linebreak;
        return {
          started,
          entries: started ? [...accum.entries, item] : accum.entries,
        };
      },
      { started: false, entries: [] },
    ).entries;
  }
};

export const trimLinebreak = <T extends RichTextEntry>(entry: T): T => {
  if (!Array.isArray(entry)) {
    return entry;
  }
  const startTrimmed = removeLinebreaksFromStart(entry);
  const reversed = startTrimmed.slice().reverse();
  const endTrimmed = removeLinebreaksFromStart(reversed);
  return endTrimmed.slice().reverse();
};
