import { factory, SyntaxKind } from 'typescript';

export const generateTypeParamsFromDomain = (domain: string) =>
  factory.createTemplateLiteralType(
    factory.createTemplateHead(`${domain}.`, `${domain}.`),
    [
      factory.createTemplateLiteralTypeSpan(
        factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
        factory.createTemplateTail('', ''),
      ),
    ],
  );
