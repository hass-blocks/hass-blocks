import fs from 'node:fs/promises';
import { frontmatter } from 'micromark-extension-frontmatter';
import { mdxjs } from 'micromark-extension-mdxjs';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { join } from 'node:path';

const automation = join(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
  '..',
  'apps',
  'docs',
  'docs',
  'api-docs',
  'blocks',
  'automation.mdx',
);

const doc = await fs.readFile(automation);

const tree = fromMarkdown(doc, {
  extensions: [mdxjs(), frontmatter(['yaml'])],
  mdastExtensions: [mdxFromMarkdown(), frontmatterFromMarkdown(['yaml'])],
});

console.log(JSON.stringify(tree, null, 2));
