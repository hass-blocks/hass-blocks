import { jsx } from './jsx.ts';

const { importStatement, importRenderer, componentRenderer, component } = jsx(
  ['ParamsTable', 'SummaryTable', 'MemberTable'],
  '@site/src/components',
);

export { importRenderer, importStatement, componentRenderer, component };
