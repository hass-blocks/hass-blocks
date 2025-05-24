import { factory, SyntaxKind } from 'typescript';
import type { ServiceField } from '@hass-blocks/hass-ts';

import { addDocCommentToNode } from '@lib/codegen/utils/add-doc-comment-to-node.ts';

const getPropertyType = (selector: ServiceField['selector']) => {
  if (selector) {
    if ('boolean' in selector) {
      return factory.createKeywordTypeNode(SyntaxKind.BooleanKeyword);
    }
    if ('number' in selector) {
      return factory.createKeywordTypeNode(SyntaxKind.NumberKeyword);
    }

    if ('text' in selector) {
      return factory.createKeywordTypeNode(SyntaxKind.StringKeyword);
    }

    if ('device' in selector) {
      return factory.createKeywordTypeNode(SyntaxKind.NeverKeyword);
    }

    if ('entity' in selector) {
      return factory.createKeywordTypeNode(SyntaxKind.StringKeyword);
    }

    if ('template' in selector) {
      return factory.createTypeReferenceNode(
        factory.createIdentifier('Record'),
        [
          factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
          factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword),
        ],
      );
    }

    if ('object' in selector) {
      // NOOP
    }

    if ('time' in selector) {
      return factory.createKeywordTypeNode(SyntaxKind.StringKeyword);
    }

    if ('options' in selector) {
      return factory.createUnionTypeNode(
        selector.options.map((option: string) =>
          factory.createLiteralTypeNode(factory.createStringLiteral(option)),
        ),
      );
    }
  }

  return factory.createKeywordTypeNode(SyntaxKind.NeverKeyword);
};

export const buildPropsPropertyNode = (name: string, field: ServiceField) => {
  const signatureNode = factory.createPropertySignature(
    undefined,
    factory.createIdentifier(name),
    field.required ? undefined : factory.createToken(SyntaxKind.QuestionToken),
    getPropertyType(field.selector),
  );

  addDocCommentToNode(signatureNode, field.description);
  return signatureNode;
};
