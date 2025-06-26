import type { Node, NodeArray } from 'typescript';

import { writeFile, open, mkdir } from 'node:fs/promises';
import * as prettier from 'prettier';
import { join } from 'node:path/posix';
import ts from 'typescript';

const exists = async (dir: string) => {
  try {
    const opened = await open(dir);
    await opened.close();
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('ENOENT')) {
        return false;
      }
    }
    throw error;
  }
  return true;
};

export const createDirIfNotExists = async (dir: string) =>
  !(await exists(dir)) ? await mkdir(dir, { recursive: true }) : undefined;

export const generateTsFile = async <T extends Node>(
  folder: string,
  fileName: string,
  nodes: NodeArray<T>,
) => {
  const file = ts.createSourceFile(
    fileName,
    '',
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS,
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const output = printer.printList(ts.ListFormat.MultiLine, nodes, file);
  createDirIfNotExists(folder);
  const newFilePath = join(folder, fileName);
  const formatted = await prettier.format(output, {
    filepath: newFilePath,
  });
  await writeFile(newFilePath, formatted);
  console.log(`Generated ${newFilePath}`);
};
