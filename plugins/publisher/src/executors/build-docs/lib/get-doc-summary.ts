import { ApiDocumentedItem, ApiItem } from '@microsoft/api-extractor-model';
import { DocLinkTag, DocNode, DocNodeKind } from '@microsoft/tsdoc';
import { link, RichTextEntry } from 'ts-markdown';

export const getDocSummary = (item: ApiItem) => {
  if (item instanceof ApiDocumentedItem) {
    const summary = item.tsdocComment?.summarySection;
    if (summary) {
      return {
        text: extractTextFromDocNodes(summary),
      };
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

  return [...children.flatMap((child) => extractTextFromDocNodes(child))];
};
