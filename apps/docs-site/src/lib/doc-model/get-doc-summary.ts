import { ApiDocumentedItem, ApiItem } from '@microsoft/api-extractor-model';
import { DocNode } from '@microsoft/tsdoc';

export const getDocSummary = (item: ApiItem) => {
  if (item instanceof ApiDocumentedItem) {
    const summary = item.tsdocComment?.summarySection;
    if (summary) {
      return extractTextFromDocNodes(summary).join();
    }
  }

  return ``;
};

const extractTextFromDocNodes = (node: DocNode): string[] => {
  const children = node.getChildNodes();

  if ('textExcerpt' in node) {
    return [node.textExcerpt?.toString() ?? ''];
  }

  return [...children.flatMap((child) => extractTextFromDocNodes(child))];
};
