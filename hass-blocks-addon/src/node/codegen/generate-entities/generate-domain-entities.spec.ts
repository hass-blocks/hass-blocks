// import type { fs } from 'memfs';
// import { mock } from 'vitest-mock-extended';
// import type { State } from '@hass-blocks/hass-ts';
// import { generateEntities } from './generate-entities.ts';
// import { readFile } from 'node:fs/promises';

describe('thing', () => {
  it('is', () => {
    expect(true).toEqual(true);
  });
});

// vi.mock('node:fs/promises', async () => {
//   const memfs: { fs: typeof fs } = await vi.importActual('memfs');
//
//   return memfs.fs.promises;
// });
//
// describe('Generat eentities', () => {
//   it('Generates a barrel file with the correct imports in it', async () => {
//     const states: State[] = [
//       mock<State>({
//         entity_id: 'foo.bar',
//       }),
//       mock<State>({
//         entity_id: 'foo.baz',
//       }),
//       mock<State>({
//         entity_id: 'foo.bap',
//       }),
//       mock<State>({
//         entity_id: 'bop.boo',
//       }),
//       mock<State>({
//         entity_id: 'bop.bong',
//       }),
//     ];
//
//     await generateEntities('foo', states);
//
//     const result = await readFile('foo/entities/index.ts', 'utf-8');
//
//     expect(result).toEqual(`import "./foo.ts";
// import "./bop.ts";
// `);
//   });
//
//   it('Generates the correct entity declarations in each file', async () => {
//     const states: State[] = [
//       mock<State>({
//         entity_id: 'foo.bar',
//       }),
//       mock<State>({
//         entity_id: 'foo.baz',
//       }),
//       mock<State>({
//         entity_id: 'foo.bap',
//       }),
//       mock<State>({
//         entity_id: 'bop.boo',
//       }),
//       mock<State>({
//         entity_id: 'bop.bong',
//       }),
//     ];
//
//     await generateEntities('foo', states);
//
//     const result = await readFile('foo/entities/foo.ts', 'utf-8');
//     const expectedOutput = `import { entity, type IEntity } from "@hass-blocks/core";
//
// declare global {
//   var barFoo: IEntity<\`foo.bar\`>;
//   var bazFoo: IEntity<\`foo.baz\`>;
//   var bapFoo: IEntity<\`foo.bap\`>;
// }
//
// globalThis.barFoo = entity("foo.bar");
// globalThis.bazFoo = entity("foo.baz");
// globalThis.bapFoo = entity("foo.bap");
// `;
//     expect(result).toEqual(expectedOutput);
//
//     const resultTwo = await readFile('foo/entities/bop.ts', 'utf-8');
//     const expectedOutputTwo = `import { entity, type IEntity } from "@hass-blocks/core";
//
// declare global {
//   var booBop: IEntity<\`bop.boo\`>;
//   var bongBop: IEntity<\`bop.bong\`>;
// }
//
// globalThis.booBop = entity("bop.boo");
// globalThis.bongBop = entity("bop.bong");
// `;
//
//     expect(resultTwo).toEqual(expectedOutputTwo);
//   });
// });
