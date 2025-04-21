import { MarkdownPreprocessor } from '@docusaurus/types/src/config';
import { toDocusaurusMarkDown } from 'docusaurus-plugin-api-extractor-markdown-documenter/dist/markdown/to-docusaurus-markdown';

export const markdownPreprocessor: MarkdownPreprocessor = ({
  fileContent,
  filePath,
}) => {
  const contents = toDocusaurusMarkDown(fileContent, 'id');
  if (filePath.endsWith('automation.md')) {
    console.log(contents);
  }

  return contents;
};
