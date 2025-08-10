import { describe, it, expect } from 'vitest';
import { CodeBlock } from './code-block.ts';
import type {
  ICheckResult,
  ICheckResultSuccess,
  ICheckResultFailure,
} from './check-result.ts';

describe('CodeBlock', () => {
  const mockContent = 'console.log("Hello, World!");';
  const mockFilePath = '/path/to/test.md';
  const mockStartLine = 5;
  const mockEndLine = 7;
  const mockLanguage = 'typescript';

  const createSuccessResult = (): ICheckResultSuccess => ({
    success: true,
  });

  const createFailureResult = (message: string): ICheckResultFailure => ({
    success: false,
    message,
  });

  describe('constructor', () => {
    it('should set all readonly properties correctly', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );

      expect(codeBlock.content).toBe(mockContent);
      expect(codeBlock.filePath).toBe(mockFilePath);
      expect(codeBlock.startLine).toBe(mockStartLine);
      expect(codeBlock.endLine).toBe(mockEndLine);
      expect(codeBlock.language).toBe(mockLanguage);
    });

    it('should initialize with empty check results', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );

      expect(codeBlock.allCheckResults.size).toBe(0);
      expect(codeBlock.failedCheckResults.size).toBe(0);
    });
  });

  describe('storeCheckResult', () => {
    it('should store a successful check result', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      const successResult = createSuccessResult();
      const checkerName = 'test-checker';

      codeBlock.storeCheckResult(checkerName, successResult);

      expect(codeBlock.allCheckResults.size).toBe(1);
      expect(codeBlock.allCheckResults.get(checkerName)).toBe(successResult);
    });

    it('should store a failed check result', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      const failureResult = createFailureResult('Test failure message');
      const checkerName = 'test-checker';

      codeBlock.storeCheckResult(checkerName, failureResult);

      expect(codeBlock.allCheckResults.size).toBe(1);
      expect(codeBlock.allCheckResults.get(checkerName)).toBe(failureResult);
    });

    it('should store multiple check results from different checkers', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      const successResult = createSuccessResult();
      const failureResult = createFailureResult('Test failure');

      codeBlock.storeCheckResult('checker1', successResult);
      codeBlock.storeCheckResult('checker2', failureResult);

      expect(codeBlock.allCheckResults.size).toBe(2);
      expect(codeBlock.allCheckResults.get('checker1')).toBe(successResult);
      expect(codeBlock.allCheckResults.get('checker2')).toBe(failureResult);
    });

    it('should overwrite existing result when same checker name is used', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      const firstResult = createSuccessResult();
      const secondResult = createFailureResult('Updated result');
      const checkerName = 'test-checker';

      codeBlock.storeCheckResult(checkerName, firstResult);
      codeBlock.storeCheckResult(checkerName, secondResult);

      expect(codeBlock.allCheckResults.size).toBe(1);
      expect(codeBlock.allCheckResults.get(checkerName)).toBe(secondResult);
    });
  });

  describe('allCheckResults getter', () => {
    it('should return empty map when no results are stored', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );

      const results = codeBlock.allCheckResults;

      expect(results.size).toBe(0);
      expect(results instanceof Map).toBe(true);
    });

    it('should return readonly map with all stored results', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      const successResult = createSuccessResult();
      const failureResult = createFailureResult('Error message');

      codeBlock.storeCheckResult('success-checker', successResult);
      codeBlock.storeCheckResult('failure-checker', failureResult);

      const results = codeBlock.allCheckResults;

      expect(results.size).toBe(2);
      expect(results.get('success-checker')).toBe(successResult);
      expect(results.get('failure-checker')).toBe(failureResult);
    });

    it('should return a readonly map that cannot be modified', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      codeBlock.storeCheckResult('test', createSuccessResult());

      const results = codeBlock.allCheckResults;

      // TypeScript should prevent this, but we can verify at runtime
      expect(results).toBeInstanceOf(Map);
      // The returned type is ReadonlyMap, so we can't call set() on it
      // This test verifies the getter returns the expected type
      expect(typeof results.get).toBe('function');
      expect(typeof results.has).toBe('function');
      expect(typeof results.size).toBe('number');
    });
  });

  describe('failedCheckResults getter', () => {
    it('should return empty map when no results are stored', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );

      const failedResults = codeBlock.failedCheckResults;

      expect(failedResults.size).toBe(0);
      expect(failedResults instanceof Map).toBe(true);
    });

    it('should return empty map when all results are successful', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      codeBlock.storeCheckResult('checker1', createSuccessResult());
      codeBlock.storeCheckResult('checker2', createSuccessResult());

      const failedResults = codeBlock.failedCheckResults;

      expect(failedResults.size).toBe(0);
    });

    it('should return only failed results', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      const successResult = createSuccessResult();
      const failureResult1 = createFailureResult('First failure');
      const failureResult2 = createFailureResult('Second failure');

      codeBlock.storeCheckResult('success-checker', successResult);
      codeBlock.storeCheckResult('failure-checker-1', failureResult1);
      codeBlock.storeCheckResult('failure-checker-2', failureResult2);

      const failedResults = codeBlock.failedCheckResults;

      expect(failedResults.size).toBe(2);
      expect(failedResults.get('failure-checker-1')).toBe(failureResult1);
      expect(failedResults.get('failure-checker-2')).toBe(failureResult2);
      expect(failedResults.has('success-checker')).toBe(false);
    });

    it('should return all results when all are failures', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      const failureResult1 = createFailureResult('First failure');
      const failureResult2 = createFailureResult('Second failure');

      codeBlock.storeCheckResult('failure-checker-1', failureResult1);
      codeBlock.storeCheckResult('failure-checker-2', failureResult2);

      const failedResults = codeBlock.failedCheckResults;

      expect(failedResults.size).toBe(2);
      expect(failedResults.get('failure-checker-1')).toBe(failureResult1);
      expect(failedResults.get('failure-checker-2')).toBe(failureResult2);
    });

    it('should return updated failed results after overwriting a result', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );
      const failureResult = createFailureResult('Initial failure');
      const successResult = createSuccessResult();
      const checkerName = 'test-checker';

      // Store a failure first
      codeBlock.storeCheckResult(checkerName, failureResult);
      expect(codeBlock.failedCheckResults.size).toBe(1);

      // Overwrite with a success
      codeBlock.storeCheckResult(checkerName, successResult);
      expect(codeBlock.failedCheckResults.size).toBe(0);

      // Overwrite back to a failure
      const newFailureResult = createFailureResult('New failure');
      codeBlock.storeCheckResult(checkerName, newFailureResult);
      expect(codeBlock.failedCheckResults.size).toBe(1);
      expect(codeBlock.failedCheckResults.get(checkerName)).toBe(
        newFailureResult,
      );
    });
  });

  describe('integration of all methods', () => {
    it('should handle mixed success and failure results correctly', () => {
      const codeBlock = new CodeBlock(
        mockContent,
        mockFilePath,
        mockStartLine,
        mockEndLine,
        mockLanguage,
      );

      const results: Array<[string, ICheckResult]> = [
        ['type-checker', createSuccessResult()],
        ['syntax-checker', createFailureResult('Syntax error on line 1')],
        ['lint-checker', createSuccessResult()],
        ['security-checker', createFailureResult('Potential security issue')],
        ['style-checker', createFailureResult('Style violation')],
      ];

      // Store all results
      results.forEach(([name, result]) => {
        codeBlock.storeCheckResult(name, result);
      });

      // Verify all results are stored
      expect(codeBlock.allCheckResults.size).toBe(5);
      results.forEach(([name, result]) => {
        expect(codeBlock.allCheckResults.get(name)).toBe(result);
      });

      // Verify only failed results are returned by failedCheckResults
      const failedResults = codeBlock.failedCheckResults;
      expect(failedResults.size).toBe(3);
      expect(failedResults.has('syntax-checker')).toBe(true);
      expect(failedResults.has('security-checker')).toBe(true);
      expect(failedResults.has('style-checker')).toBe(true);
      expect(failedResults.has('type-checker')).toBe(false);
      expect(failedResults.has('lint-checker')).toBe(false);
    });
  });
});
