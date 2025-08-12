import { afterEach, describe, expect, it, vi } from 'vitest';
import * as resolveExports from 'resolve.exports';
import { CodeBlock } from '../core/code-block.ts';
import { ImportSpecifierPreprocessor } from './import-specifier-preprocessor.ts';

vi.mock('resolve.exports');

afterEach(() => {
  vi.resetAllMocks();
});

function createMockCodeBlock(
  content: string,
  overrides: Partial<CodeBlock> = {},
): CodeBlock {
  return new CodeBlock(
    content,
    overrides.filePath ?? '/test.md',
    overrides.startLine ?? 1,
    overrides.endLine ?? 1,
    overrides.language ?? 'typescript',
  );
}

interface MockPackageJson {
  name: string;
  main?: string;
  exports?: unknown;
}

function createMockPackageJson(
  overrides: Partial<MockPackageJson> = {},
): MockPackageJson {
  return {
    name: '@test-package',
    main: './dist/index.js',
    ...overrides,
  };
}

function setupResolveExportsMock(resolvedPath?: string | null): void {
  const mockResolve = vi.mocked(resolveExports.resolve);
  if (resolvedPath === null) {
    mockResolve.mockReturnValue([]);
  } else if (resolvedPath === undefined) {
    mockResolve.mockImplementation(() => {
      throw new Error('Package resolution failed');
    });
  } else {
    mockResolve.mockReturnValue([resolvedPath]);
  }
}

describe('ImportSpecifierPreprocessor', () => {
  describe('constructor', () => {
    it('should accept packageName, packageJsonPath, and packageJson', () => {
      const packageName = '@test-package';
      const packageJsonPath = '/path/to/package.json';
      const packageJson = createMockPackageJson();

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      expect(preprocessor.name).toBe('import-specifier-replacement');
      expect(preprocessor).toBeInstanceOf(ImportSpecifierPreprocessor);
    });

    it('should accept minimal configuration with just packageName and packageJsonPath', () => {
      const packageName = '@minimal-package';
      const packageJsonPath = '/minimal/package.json';

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
      });

      expect(preprocessor.name).toBe('import-specifier-replacement');
    });

    it('should handle packageName with special characters', () => {
      const packageName = '@scoped/package-name_v2';
      const packageJsonPath = '/path/package.json';

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
      });

      expect(preprocessor).toBeInstanceOf(ImportSpecifierPreprocessor);
    });

    it('should handle different packageJsonPath formats', () => {
      const packageName = '@test';
      const packageJsonPath = '/absolute/path/to/package.json';

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
      });

      expect(preprocessor).toBeInstanceOf(ImportSpecifierPreprocessor);
    });
  });

  describe('name property', () => {
    it('should return "import-specifier-replacement"', () => {
      const preprocessor = new ImportSpecifierPreprocessor({
        packageName: '@test',
        packageJsonPath: '/test/package.json',
      });

      expect(preprocessor.name).toBe('import-specifier-replacement');
    });

    it('should have consistent name regardless of configuration', () => {
      const preprocessor1 = new ImportSpecifierPreprocessor({
        packageName: '@package1',
        packageJsonPath: '/path1/package.json',
      });

      const preprocessor2 = new ImportSpecifierPreprocessor({
        packageName: '@package2',
        packageJsonPath: '/path2/package.json',
        packageJson: createMockPackageJson({ name: '@package2' }),
      });

      expect(preprocessor1.name).toBe('import-specifier-replacement');
      expect(preprocessor2.name).toBe('import-specifier-replacement');
      expect(preprocessor1.name).toBe(preprocessor2.name);
    });
  });

  describe('preprocess method - named imports', () => {
    it('should replace named imports with resolved file path', async () => {
      setupResolveExportsMock('./dist/index.js');
      const packageName = '@test-package';
      const packageJsonPath = '/project/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { foo, bar } from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import { foo, bar } from '/project/dist/index.js';`,
      );
      expect(result.filePath).toBe(codeBlock.filePath);
      expect(result.startLine).toBe(codeBlock.startLine);
      expect(result.endLine).toBe(codeBlock.endLine);
      expect(result.language).toBe(codeBlock.language);
    });

    it('should handle named imports with whitespace variations', async () => {
      setupResolveExportsMock('./lib/main.js');
      const packageName = '@whitespace-test';
      const packageJsonPath = '/test/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import    {   foo,   bar   }    from    '${packageName}'   ;`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import    {   foo,   bar   }    from    '/test/lib/main.js'   ;`,
      );
    });

    it('should handle multiple named import statements', async () => {
      setupResolveExportsMock('./src/index.js');
      const packageName = '@multi-import';
      const packageJsonPath = '/multi/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `
import { foo } from '${packageName}';
import { bar, baz } from '${packageName}';
import { qux } from 'other-package';
import { another } from '${packageName}';
      `.trim(),
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `
import { foo } from '/multi/src/index.js';
import { bar, baz } from '/multi/src/index.js';
import { qux } from 'other-package';
import { another } from '/multi/src/index.js';
      `.trim(),
      );
    });

    it('should handle named imports with different quote styles', async () => {
      setupResolveExportsMock('./dist/main.js');
      const packageName = '@quote-test';
      const packageJsonPath = '/quote/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `
import { foo } from "${packageName}";
import { bar } from '${packageName}';
      `.trim(),
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `
import { foo } from "/quote/dist/main.js";
import { bar } from '/quote/dist/main.js';
      `.trim(),
      );
    });
  });

  describe('preprocess method - default imports', () => {
    it('should replace default imports with resolved file path', async () => {
      setupResolveExportsMock('./lib/index.js');
      const packageName = '@default-test';
      const packageJsonPath = '/default/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import defaultExport from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import defaultExport from '/default/lib/index.js';`,
      );
    });

    it('should handle default imports with different variable names', async () => {
      setupResolveExportsMock('./build/index.js');
      const packageName = '@var-test';
      const packageJsonPath = '/var/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `
import MyComponent from '${packageName}';
import AnotherName from '${packageName}';
import $special_123 from '${packageName}';
      `.trim(),
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `
import MyComponent from '/var/build/index.js';
import AnotherName from '/var/build/index.js';
import $special_123 from '/var/build/index.js';
      `.trim(),
      );
    });

    it('should handle default imports with whitespace variations', async () => {
      setupResolveExportsMock('./dist/main.js');
      const packageName = '@whitespace-default';
      const packageJsonPath = '/ws/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import    defaultExport    from    '${packageName}'    ;`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import    defaultExport    from    '/ws/dist/main.js'    ;`,
      );
    });
  });

  describe('preprocess method - namespace imports', () => {
    it('should replace namespace imports with resolved file path', async () => {
      setupResolveExportsMock('./src/index.js');
      const packageName = '@namespace-test';
      const packageJsonPath = '/namespace/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import * as namespace from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import * as namespace from '/namespace/src/index.js';`,
      );
    });

    it('should handle namespace imports with different alias names', async () => {
      setupResolveExportsMock('./lib/main.js');
      const packageName = '@alias-test';
      const packageJsonPath = '/alias/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `
import * as Utils from '${packageName}';
import * as MyLib from '${packageName}';
import * as $special_namespace from '${packageName}';
      `.trim(),
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `
import * as Utils from '/alias/lib/main.js';
import * as MyLib from '/alias/lib/main.js';
import * as $special_namespace from '/alias/lib/main.js';
      `.trim(),
      );
    });

    it('should handle namespace imports with whitespace variations', async () => {
      setupResolveExportsMock('./dist/index.js');
      const packageName = '@ws-namespace';
      const packageJsonPath = '/ws-ns/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import    *    as    namespace    from    '${packageName}'    ;`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import    *    as    namespace    from    '/ws-ns/dist/index.js'    ;`,
      );
    });
  });

  describe('preprocess method - mixed import patterns', () => {
    it('should handle multiple different import patterns in same code block', async () => {
      setupResolveExportsMock('./index.js');
      const packageName = '@mixed-imports';
      const packageJsonPath = '/mixed/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `
import { namedExport } from '${packageName}';
import defaultExport from '${packageName}';
import * as namespace from '${packageName}';
import unrelatedExport from 'other-package';
import { anotherNamed } from '${packageName}';
      `.trim(),
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `
import { namedExport } from '/mixed/index.js';
import defaultExport from '/mixed/index.js';
import * as namespace from '/mixed/index.js';
import unrelatedExport from 'other-package';
import { anotherNamed } from '/mixed/index.js';
      `.trim(),
      );
    });

    it('should handle complex code with imports alongside other code', async () => {
      setupResolveExportsMock('./dist/api.js');
      const packageName = '@complex-code';
      const packageJsonPath = '/complex/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `
import { api } from '${packageName}';
import fs from 'fs';

// Some comment about the code
const result = api.getData();

import * as utils from '${packageName}';

function processData() {
  return utils.process(result);
}

export { processData };
      `.trim(),
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `
import { api } from '/complex/dist/api.js';
import fs from 'fs';

// Some comment about the code
const result = api.getData();

import * as utils from '/complex/dist/api.js';

function processData() {
  return utils.process(result);
}

export { processData };
      `.trim(),
      );
    });
  });

  describe('preprocess method - package resolution', () => {
    it('should use resolve.exports for package resolution', async () => {
      const mockResolve = vi.mocked(resolveExports.resolve);
      mockResolve.mockReturnValue(['./custom/entry.js']);

      const packageName = '@resolve-test';
      const packageJsonPath = '/resolve/package.json';
      const packageJson = createMockPackageJson({
        name: packageName,
        exports: {
          '.': './custom/entry.js',
        },
      });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      await preprocessor.preprocess(codeBlock);

      expect(mockResolve).toHaveBeenCalledWith(packageJson, '.');
      expect(mockResolve).toHaveBeenCalledTimes(1);
    });

    it('should handle package.json with exports field', async () => {
      setupResolveExportsMock('./lib/custom.js');
      const packageName = '@exports-test';
      const packageJsonPath = '/exports/package.json';
      const packageJson = createMockPackageJson({
        name: packageName,
        exports: {
          '.': './lib/custom.js',
          './subpath': './lib/sub.js',
        },
      });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import { test } from '/exports/lib/custom.js';`,
      );
    });

    it('should handle package.json with main field fallback', async () => {
      setupResolveExportsMock('./main-entry.js');
      const packageName = '@main-test';
      const packageJsonPath = '/main/package.json';
      const packageJson = createMockPackageJson({
        name: packageName,
        main: './main-entry.js',
      });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import { test } from '/main/main-entry.js';`,
      );
    });

    it('should resolve paths relative to package.json directory', async () => {
      setupResolveExportsMock('./nested/deep/index.js');
      const packageName = '@nested-test';
      const packageJsonPath = '/root/packages/nested-package/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import { test } from '/root/packages/nested-package/nested/deep/index.js';`,
      );
    });
  });

  describe('preprocess method - error handling', () => {
    it('should throw error when package resolution fails', async () => {
      setupResolveExportsMock(undefined);
      const packageName = '@error-test';
      const packageJsonPath = '/error/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      await expect(preprocessor.preprocess(codeBlock)).rejects.toThrow(
        'Package resolution failed',
      );
    });

    it('should throw error when resolved path is null', async () => {
      setupResolveExportsMock(null);
      const packageName = '@null-test';
      const packageJsonPath = '/null/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      await expect(preprocessor.preprocess(codeBlock)).rejects.toThrow(
        `Cannot resolve entry point for package '${packageName}'`,
      );
    });

    it('should throw error when resolved array is empty', async () => {
      setupResolveExportsMock(null);
      const packageName = '@empty-test';
      const packageJsonPath = '/empty/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      await expect(preprocessor.preprocess(codeBlock)).rejects.toThrow(
        `Cannot resolve entry point for package '${packageName}'`,
      );
    });

    it('should provide descriptive error messages for resolution failures', async () => {
      const mockResolve = vi.mocked(resolveExports.resolve);
      mockResolve.mockImplementation(() => {
        throw new Error('Exports field is malformed');
      });

      const packageName = '@malformed-test';
      const packageJsonPath = '/malformed/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      await expect(preprocessor.preprocess(codeBlock)).rejects.toThrow(
        'Exports field is malformed',
      );
    });
  });

  describe('preprocess method - no matching imports', () => {
    it('should return unchanged CodeBlock when no imports match packageName', async () => {
      const packageName = '@no-match-test';
      const packageJsonPath = '/no-match/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const originalContent = `
import { something } from 'other-package';
import anotherThing from 'different-package';
import * as utils from 'utility-package';

const code = 'some code here';
      `.trim();

      const codeBlock = createMockCodeBlock(originalContent);

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(originalContent);
      expect(result).toBe(codeBlock);
    });

    it('should not call resolve.exports when no matching imports found', async () => {
      const mockResolve = vi.mocked(resolveExports.resolve);

      const packageName = '@unused-package';
      const packageJsonPath = '/unused/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from 'totally-different-package';`,
      );

      await preprocessor.preprocess(codeBlock);

      expect(mockResolve).not.toHaveBeenCalled();
    });

    it('should handle code blocks with no imports at all', async () => {
      const packageName = '@any-package';
      const packageJsonPath = '/any/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const originalContent = `
function calculate(x: number, y: number): number {
  return x + y;
}

const result = calculate(5, 10);
console.log(result);
      `.trim();

      const codeBlock = createMockCodeBlock(originalContent);

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(originalContent);
      expect(result).toBe(codeBlock);
    });
  });

  describe('preprocess method - edge cases', () => {
    it('should handle malformed import statements gracefully', async () => {
      const packageName = '@malformed-import-test';
      const packageJsonPath = '/malformed/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const malformedContent = `
// This has a broken import syntax
import { from '${packageName}';
import incomplete from 
import * as ${packageName}';
      `.trim();

      const codeBlock = createMockCodeBlock(malformedContent);

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(malformedContent);
    });

    it('should handle package names with special regex characters', async () => {
      setupResolveExportsMock('./index.js');
      const packageName = '@scoped/package-name.test+special';
      const packageJsonPath = '/special/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(`import { test } from '/special/index.js';`);
    });

    it('should handle very long import statements', async () => {
      setupResolveExportsMock('./dist/index.js');
      const packageName = '@long-import-test';
      const packageJsonPath = '/long/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const longImportList = Array.from(
        { length: 50 },
        (_, i) => `export${i}`,
      ).join(', ');
      const codeBlock = createMockCodeBlock(
        `import { ${longImportList} } from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import { ${longImportList} } from '/long/dist/index.js';`,
      );
    });

    it('should handle imports within multiline strings or comments', async () => {
      const packageName = '@string-test';
      const packageJsonPath = '/string/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `
const codeString = \`
import { fake } from '${packageName}';
\`;

/*
 * This is a comment with import { fake } from '${packageName}';
 */

// Single line comment with import from '${packageName}'
      `.trim(),
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(codeBlock.content);
    });

    it('should handle empty code blocks', async () => {
      const packageName = '@empty-test';
      const packageJsonPath = '/empty/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock('');

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe('');
      expect(result).toBe(codeBlock);
    });

    it('should handle code blocks with only whitespace', async () => {
      const packageName = '@whitespace-only-test';
      const packageJsonPath = '/ws-only/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const whitespaceContent = '   \n\t  \n   ';
      const codeBlock = createMockCodeBlock(whitespaceContent);

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(whitespaceContent);
      expect(result).toBe(codeBlock);
    });
  });

  describe('preprocess method - CodeBlock preservation', () => {
    it('should preserve all non-content properties when content changes', async () => {
      setupResolveExportsMock('./lib/index.js');
      const packageName = '@preserve-test';
      const packageJsonPath = '/preserve/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const originalFilePath = '/path/to/markdown/file.md';
      const originalStartLine = 42;
      const originalEndLine = 45;
      const originalLanguage = 'typescript';

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
        {
          filePath: originalFilePath,
          startLine: originalStartLine,
          endLine: originalEndLine,
          language: originalLanguage,
        },
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result.content).toBe(
        `import { test } from '/preserve/lib/index.js';`,
      );
      expect(result.filePath).toBe(originalFilePath);
      expect(result.startLine).toBe(originalStartLine);
      expect(result.endLine).toBe(originalEndLine);
      expect(result.language).toBe(originalLanguage);
    });

    it('should return same instance when no changes are made', async () => {
      const packageName = '@no-change-test';
      const packageJsonPath = '/no-change/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from 'other-package';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
    });

    it('should return new instance when content changes', async () => {
      setupResolveExportsMock('./index.js');
      const packageName = '@new-instance-test';
      const packageJsonPath = '/new-instance/package.json';
      const packageJson = createMockPackageJson({ name: packageName });

      const preprocessor = new ImportSpecifierPreprocessor({
        packageName,
        packageJsonPath,
        packageJson,
      });

      const codeBlock = createMockCodeBlock(
        `import { test } from '${packageName}';`,
      );

      const result = await preprocessor.preprocess(codeBlock);

      expect(result).not.toBe(codeBlock);
      expect(result).toBeInstanceOf(CodeBlock);
    });
  });
});
