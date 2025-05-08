import { DocExcerpt, type DocNode } from '@microsoft/tsdoc';

export const extractTextFromDocNode = (node: DocNode | undefined): string => {
  if (!node) {
    return ``;
  }
  const result = extractTextFromDocNodeHelper(node);
  return result.join();
};

const extractTextFromDocNodeHelper = (node: DocNode): string[] => {
  const children = node.getChildNodes();

  if (node instanceof DocExcerpt) {
    return [node.content.toString() ?? ''];
  }

  return [...children.flatMap((child) => extractTextFromDocNode(child))];
};
