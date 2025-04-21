import { RichTextEntry } from 'ts-markdown';

export interface RichTextProps {
  children: RichTextEntry;
}

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

const trimLinebreak = (entry: RichTextEntry) => {
  if (!Array.isArray(entry)) {
    return entry;
  }
  const startTrimmed = removeLinebreaksFromStart(entry);
  const reversed = startTrimmed.slice().reverse();
  const endTrimmed = removeLinebreaksFromStart(reversed);
  return endTrimmed.slice().reverse();
};

export const RichText = ({ children }: RichTextProps) => {
  const trimmedChildren = trimLinebreak(children);
  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(trimmedChildren)) {
    return (
      <>
        {trimmedChildren.map((child) => {
          if (typeof child === 'object') {
            if (
              'link' in child &&
              'href' in child.link &&
              'text' in child.link
            ) {
              return <a href={child.href}>{child.text}</a>;
            }

            if ('linebreak' in child) {
              return <br />;
            }
          }
          return child;
        })}
      </>
    );
  }

  return null;
};
