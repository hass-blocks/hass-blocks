# @hass-blocks/code-block-extractor

A TypeScript library for extracting and validating code blocks from markdown files. This package provides a flexible framework for checking code quality, syntax, and custom rules across documentation and markdown files.

## Features

- 🔍 **Code Block Extraction** - Automatically extract fenced code blocks from markdown files
- 🔧 **Flexible Checker System** - Create custom checkers for different languages and validation rules
- 📝 **TypeScript Support** - Built-in TypeScript checker with auto-import injection
- 📊 **Detailed Results** - Track check results for each code block with success/failure status
- 🚀 **Simple API** - Easy-to-use main entry point for processing multiple files

## Installation

```bash
npm install @hass-blocks/code-block-extractor
```

## Quick Start

```typescript
import {
  checkCodeBlocks,
  TypeScriptChecker,
  type ICodeBlocksCheckerSettings,
} from '@hass-blocks/code-block-extractor';

// Configure the TypeScript checker
const typeScriptChecker = new TypeScriptChecker({
  tsconfigPath: './tsconfig.json',
  packageJsonPath: './package.json',
  workingDirectory: process.cwd(),
});

// Configure and run
const settings: ICodeBlocksCheckerSettings = {
  markdownFiles: ['./docs/README.md', './docs/guide.md'],
  checkers: [typeScriptChecker],
};

const results = await checkCodeBlocks(settings);

// Check for any validation failures
for (const file of results) {
  for (const codeBlock of file.codeBlocks) {
    if (codeBlock.failedCheckResults.size > 0) {
      console.log(
        `❌ Issues found in ${codeBlock.filePath} at line ${codeBlock.startLine}`,
      );
      for (const [checker, result] of codeBlock.failedCheckResults) {
        console.log(`  ${checker}: ${result.message}`);
      }
    } else {
      console.log(`✅ ${codeBlock.language} code block validated successfully`);
    }
  }
}
```

## API Reference

### Main Entry Point

#### `checkCodeBlocks(settings: ICodeBlocksCheckerSettings): Promise<MarkdownFile[]>`

The primary function for processing markdown files and running checkers.

**Parameters:**

- `settings` - Configuration object containing files and checkers

**Returns:**

- Promise resolving to an array of `MarkdownFile` instances with processed code blocks

### Core Classes

#### `MarkdownFile`

Represents a markdown file and its extracted code blocks.

```typescript
const markdownFile = new MarkdownFile(content, filePath);

// Access code blocks
for (const codeBlock of markdownFile.codeBlocks) {
  console.log(`${codeBlock.language}: ${codeBlock.content}`);
}
```

**Properties:**

- `codeBlocks: readonly CodeBlock[]` - Array of extracted code blocks

#### `CodeBlock`

Represents a single code block extracted from markdown.

```typescript
// Properties
codeBlock.content; // The code content
codeBlock.language; // Language identifier (e.g., 'typescript', 'javascript')
codeBlock.filePath; // Path to the source markdown file
codeBlock.startLine; // Starting line number in the markdown
codeBlock.endLine; // Ending line number in the markdown

// Check results
codeBlock.allCheckResults; // Map of all checker results
codeBlock.failedCheckResults; // Map of only failed checker results
```

#### `Checker` (Abstract Base Class)

Base class for creating custom code block validators.

```typescript
class CustomChecker extends Checker {
  constructor() {
    super('custom-checker-name');
  }

  // Determine if this checker can validate the code block
  canCheck(codeBlock: CodeBlock): boolean {
    return codeBlock.language === 'javascript';
  }

  // Perform the actual validation
  async check(codeBlock: CodeBlock): Promise<ICheckResult> {
    // Your validation logic
    if (isValid(codeBlock.content)) {
      return { success: true };
    }
    return {
      success: false,
      message: 'Validation failed: reason here',
    };
  }
}
```

**Methods:**

- `canCheck(codeBlock: CodeBlock): boolean` - Override to specify which blocks this checker handles
- `check(codeBlock: CodeBlock): Promise<ICheckResult>` - Override to implement validation logic
- `addCodeBlock(codeBlock: CodeBlock): void` - Add a code block for checking (called automatically)
- `checkAll(): Promise<void>` - Run checks on all added blocks (called automatically)

### Built-in Checkers

#### `TypeScriptChecker`

Advanced checker for TypeScript code blocks with import resolution and compilation validation.

```typescript
import { TypeScriptChecker } from '@hass-blocks/code-block-extractor';

const tsChecker = new TypeScriptChecker({
  tsconfigPath: './tsconfig.json',
  packageJsonPath: './package.json',
  workingDirectory: process.cwd(),
});
```

Features:

- Full TypeScript compilation validation
- Auto-import injection for missing imports
- Package.json-based import resolution
- Configurable compiler options

### Types

#### `ICodeBlocksCheckerSettings`

```typescript
interface ICodeBlocksCheckerSettings {
  markdownFiles: string[]; // Array of markdown file paths
  checkers: Checker[]; // Array of checker instances
}
```

#### `ICheckResult`

```typescript
// Success result
interface ICheckResultSuccess {
  success: true;
}

// Failure result
interface ICheckResultFailure {
  success: false;
  message: string;
}

type ICheckResult = ICheckResultSuccess | ICheckResultFailure;
```

## Examples

### Basic Custom Checker

```typescript
import {
  Checker,
  CodeBlock,
  ICheckResult,
} from '@hass-blocks/code-block-extractor';

class NoConsoleLogChecker extends Checker {
  constructor() {
    super('no-console-log');
  }

  canCheck(codeBlock: CodeBlock): boolean {
    return ['javascript', 'js', 'typescript', 'ts'].includes(
      codeBlock.language.toLowerCase(),
    );
  }

  async check(codeBlock: CodeBlock): Promise<ICheckResult> {
    if (codeBlock.content.includes('console.log')) {
      return {
        success: false,
        message: 'Code should not contain console.log statements',
      };
    }
    return { success: true };
  }
}
```

### Processing Multiple Files with Multiple Checkers

```typescript
import {
  checkCodeBlocks,
  TypeScriptChecker,
} from '@hass-blocks/code-block-extractor';

const settings = {
  markdownFiles: ['./docs/api.md', './docs/tutorial.md', './README.md'],
  checkers: [
    new TypeScriptChecker({
      tsconfigPath: './tsconfig.json',
      packageJsonPath: './package.json',
      workingDirectory: process.cwd(),
    }),
    new NoConsoleLogChecker(),
  ],
};

const results = await checkCodeBlocks(settings);

// Process results
for (const markdownFile of results) {
  const fileName = markdownFile.codeBlocks[0]?.filePath || 'unknown';
  console.log(`\n📄 ${fileName}`);

  for (const codeBlock of markdownFile.codeBlocks) {
    const failed = codeBlock.failedCheckResults;

    if (failed.size > 0) {
      console.log(
        `❌ ${codeBlock.language} block (lines ${codeBlock.startLine}-${codeBlock.endLine}):`,
      );
      for (const [checkerName, result] of failed) {
        console.log(`   ${checkerName}: ${result.message}`);
      }
    } else {
      console.log(
        `✅ ${codeBlock.language} block (lines ${codeBlock.startLine}-${codeBlock.endLine})`,
      );
    }
  }
}
```

### Language-Specific Validation

```typescript
class PythonStyleChecker extends Checker {
  constructor() {
    super('python-style');
  }

  canCheck(codeBlock: CodeBlock): boolean {
    return codeBlock.language.toLowerCase() === 'python';
  }

  async check(codeBlock: CodeBlock): Promise<ICheckResult> {
    const lines = codeBlock.content.split('\n');

    // Check for proper indentation (4 spaces)
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim() && line.startsWith(' ')) {
        const leadingSpaces = line.match(/^ */)?.[0].length || 0;
        if (leadingSpaces % 4 !== 0) {
          return {
            success: false,
            message: `Line ${i + 1}: Use 4-space indentation (found ${leadingSpaces} spaces)`,
          };
        }
      }
    }

    return { success: true };
  }
}
```

### Working with Check Results

```typescript
const results = await checkCodeBlocks(settings);

// Find all failed checks across all files
const allFailures = results.flatMap((file) =>
  file.codeBlocks.flatMap((block) =>
    Array.from(block.failedCheckResults.entries()).map(([checker, result]) => ({
      file: block.filePath,
      line: block.startLine,
      language: block.language,
      checker,
      error: result.message,
    })),
  ),
);

if (allFailures.length > 0) {
  console.error(`❌ Found ${allFailures.length} code block validation errors`);
  process.exit(1);
} else {
  console.log('✅ All code blocks passed validation');
}
```

## Advanced Usage

### Creating a CLI Tool

```typescript
#!/usr/bin/env node
import { checkCodeBlocks } from '@hass-blocks/code-block-extractor';
import { glob } from 'glob';

async function main() {
  const markdownFiles = await glob('**/*.md', { ignore: 'node_modules/**' });

  const results = await checkCodeBlocks({
    markdownFiles,
    checkers: [
      // Your custom checkers here
    ],
  });

  // Report results and exit with appropriate code
  const hasErrors = results.some((file) =>
    file.codeBlocks.some((block) => block.failedCheckResults.size > 0),
  );

  process.exit(hasErrors ? 1 : 0);
}

main().catch(console.error);
```

### Integration with Build Tools

```typescript
// webpack.config.js or similar
import { checkCodeBlocks } from '@hass-blocks/code-block-extractor';

class MarkdownValidationPlugin {
  apply(compiler) {
    compiler.hooks.beforeCompile.tapAsync(
      'MarkdownValidation',
      async (params, callback) => {
        try {
          await checkCodeBlocks({
            markdownFiles: ['./docs/**/*.md'],
            checkers: [
              /* your checkers */
            ],
          });
          callback();
        } catch (error) {
          callback(error);
        }
      },
    );
  }
}
```

## Development

### Building the Package

```bash
npm run build
```

### Running Tests

```bash
npm test
```

### Type Checking

```bash
npm run check-types
```

## License

This package is part of the @hass-blocks monorepo. See the main repository for license information.
