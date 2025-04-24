import {
  DocBlock,
  DocCodeSpan,
  DocFencedCode,
  DocLinkTag,
  DocParagraph,
  DocParamBlock,
  DocParamCollection,
  DocPlainText,
  DocSection,
  DocSoftBreak,
  type DocNode,
} from '@microsoft/tsdoc';

import type { FencedCode, Paragraph, ParsedTsdoc, TsDocSection } from '@types';
import { cleanParagraphs } from './clean-paragraphs';

export const parseTsDoc = (node: DocNode): ParsedTsdoc => {
  const [summarySection] = node
    .getChildNodes()
    .filter((childNode) => childNode instanceof DocSection);

  const remarks = findBlocks(node, 'remarks');
  const example = findBlocks(node, 'example');
  const blocks = getAllBlocks(node);

  return {
    summary: parseSection(summarySection),
    remarks: remarks.length > 0 ? parseSection(remarks[0].content) : undefined,
    params: getParams(node),
    blocks,
    example: example.length > 0 ? parseSection(example[0].content) : undefined,
  };
};

const getParams = (node: DocNode) => {
  const [params] = node
    .getChildNodes()
    .filter((node) => node instanceof DocParamCollection);

  if (!params) {
    return undefined;
  }

  return params
    .getChildNodes()
    .filter((node) => node instanceof DocParamBlock)
    .map((block) => ({
      name: block.parameterName,
      description: parseSection(block.content),
    }));
};

const findBlocks = (node: DocNode, tagName: string): DocBlock[] => {
  return node
    .getChildNodes()
    .filter((childNodes) => childNodes instanceof DocBlock)
    .filter((childNode) => childNode.blockTag.tagName === `@${tagName}`);
};

const getAllBlocks = (node: DocNode) => {
  return node
    .getChildNodes()
    .filter((childNodes) => childNodes instanceof DocBlock)
    .map((block) => ({
      type: block.blockTag.tagName,
      text: parseSection(block.content),
    }));
};

const parseSection = (sectionNode: DocSection): TsDocSection[] => {
  return sectionNode
    .getChildNodes()
    .filter(
      (childNode) =>
        childNode instanceof DocParagraph || childNode instanceof DocFencedCode,
    )
    .map((item) => {
      if (item instanceof DocParagraph) {
        return cleanParagraphs(parseParagraph(item));
      }
      return parseFencedCodeBlock(item);
    });
};

const parseFencedCodeBlock = (
  fencedCodeBlocknode: DocFencedCode,
): FencedCode => {
  return {
    type: 'fenced-code',
    code: fencedCodeBlocknode.code,
    language: fencedCodeBlocknode.language,
  };
};

const parseParagraph = (paragraphNode: DocParagraph): Paragraph => {
  const relevantChildNodes = paragraphNode
    .getChildNodes()
    .filter(
      (childNode) =>
        childNode instanceof DocPlainText ||
        childNode instanceof DocLinkTag ||
        childNode instanceof DocSoftBreak,
    );

  return {
    type: 'paragraph',
    text: relevantChildNodes.map((node) => {
      if (node instanceof DocSoftBreak) {
        return {
          type: 'linebreak',
        };
      }

      if (node instanceof DocCodeSpan) {
        return {
          type: 'code',
          code: node.code,
        };
      }

      if (node instanceof DocPlainText) {
        return node.text ?? '';
      }

      return {
        type: 'link',
        text: node.linkText ?? '',
        link: node.codeDestination ?? node.urlDestination ?? '',
      };
    }),
  };
};
