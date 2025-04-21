import { ApiDocumentedItem, ApiItem } from '@microsoft/api-extractor-model';
import { DocLinkTag, DocNode, DocNodeKind } from '@microsoft/tsdoc';
import { link, RichTextEntry } from 'ts-markdown';

export const getDocSummary = (item: ApiItem) => {
  if (item instanceof ApiDocumentedItem) {
    const summary = item.tsdocComment?.summarySection;
    if (summary) {
      const result = extractTextFromDocNodes(summary);
      if (result.every((item) => typeof item === 'string')) {
        return result.join('');
      }
      return result;
    }
  }

  return ``;
};

const extractTextFromDocNodes = (node: DocNode): RichTextEntry[] => {
  const children = node.getChildNodes();

  if ('textExcerpt' in node) {
    return [node.textExcerpt?.toString() ?? ''];
  }

  if (node.kind === DocNodeKind.LinkTag) {
    const linkNode = node as DocLinkTag;
    return [
      link({
        href: linkNode.urlDestination ?? '(unknown)',
        text: linkNode.linkText ?? linkNode.urlDestination ?? '(unknown)',
      }),
    ];
  }

  if (node.kind === DocNodeKind.SoftBreak) {
    return [
      {
        linebreak: true,
      },
    ];
  }

  return [...children.flatMap((child) => extractTextFromDocNodes(child))];
};
