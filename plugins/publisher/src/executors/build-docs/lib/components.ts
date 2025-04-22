import { jsx } from './jsx.ts';

const { importStatement, importRenderer, componentRenderer, component, closingTagRenderer } = jsx(
  ['ParamsTable', 'SummaryTable', 'MemberTable', 'Token', "CodeBlock"],
  '@site/src/components',
);

export { importRenderer, importStatement as importLocalComponents, componentRenderer, component, closingTagRenderer };
