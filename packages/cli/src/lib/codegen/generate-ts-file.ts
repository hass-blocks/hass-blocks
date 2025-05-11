import { existsSync, mkdirSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path/posix';
import ts from 'typescript';
import { Node, NodeArray } from 'typescript';

export const createDirIfNotExists = (dir: string) =>
  !existsSync(dir) ? mkdirSync(dir, { recursive: true }) : undefined;

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
  await writeFile(newFilePath, output);
  console.log(`Generated ${newFilePath}`);
};
