import { jsx } from './jsx.ts';

const { importStatement, importRenderer, componentRenderer, component } = jsx(
  ['Prism'], 'react-syntax-highlighter',
);

export { importRenderer, importStatement as importPrism, componentRenderer, component as prismComponent };
