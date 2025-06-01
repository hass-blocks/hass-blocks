import { addSyntheticLeadingComment, type Node, SyntaxKind } from 'typescript';

export const addDocCommentToNode = (node: Node, text?: string) => {
  if (!text) {
    return;
  }
  const formattedParts = (text.endsWith('.') ? text.slice(0, -1) : text)
    .split('\n')
    .map((part) => `* ${part}`)
    .join('\n');

  addSyntheticLeadingComment(
    node,
    SyntaxKind.MultiLineCommentTrivia,
    `*\n${formattedParts}\n`,
    true,
  );
};
