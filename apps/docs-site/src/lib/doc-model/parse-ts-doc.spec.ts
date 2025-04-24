import { TSDocParser } from '@microsoft/tsdoc';
import { parseTsDoc } from './parse-ts-doc.ts';

describe('parse ts doc', () => {
  it('found the summary section at the top', () => {
    const rawTsDoc = `/**
 * Returns the average of two numbers.
 *
 * @remarks
 * foo bar baz, bash bip
 * bop
 */`;

    const parser = new TSDocParser();
    const node = parser.parseString(rawTsDoc);
    const comment = node.docComment;

    const result = parseTsDoc(comment);

    expect(result.summary).toHaveLength(1);
    expect(result.summary[0].type).toEqual('paragraph');
    if (result.summary[0].type === 'paragraph') {
      expect(result.summary[0].text);
      expect(result.summary[0].text).toEqual(
        'Returns the average of two numbers.',
      );
    }
  });

  it('found the remarks section', () => {
    const rawTsDoc = `/**
 * Returns the average of two
 * numbers.
 *
 * @remarks
 * foo bar baz, bash bip bop
 */`;
    const parser = new TSDocParser();
    const node = parser.parseString(rawTsDoc);
    const comment = node.docComment;

    const result = parseTsDoc(comment);

    expect(result.remarks).toBeDefined();
    if (result.remarks?.[0].type === 'paragraph') {
      expect(result.remarks?.[0].type).toEqual('paragraph');
      expect(result.remarks?.[0].text).toEqual('foo bar baz, bash bip bop');
    }
  });

  it('found the remarks section', () => {
    const rawTsDoc = `/**
 * Returns the average of two
 * asda
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * asdasd
 *
 * @param x - The first input number
 * @param y - The second input number
 *
 * @beta
 */`;
    const parser = new TSDocParser();
    const node = parser.parseString(rawTsDoc);
    const comment = node.docComment;

    const result = parseTsDoc(comment);

    expect(result.params).toBeDefined();
    expect(result.params?.[0].name).toEqual('x');
    if (result.params?.[0].description[0].type === 'paragraph') {
      expect(result.params?.[0].description[0].text).toEqual(
        'The first input number',
      );
    }
    if (result.params?.[1].description[0].type === 'paragraph') {
      expect(result.params?.[1].name).toEqual('y');
      expect(result.params?.[1].description[0].text).toEqual(
        'The second input number',
      );
    }
  });

  it('finds the return value', () => {
    const rawTsDoc = `/**
 * Returns the average of two
 * asda
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * asdasd
 *
 * @param x - The first input number
 * @param y - The second input number
 *
 * @returns foo bar
 */`;
    const parser = new TSDocParser();
    const node = parser.parseString(rawTsDoc);
    const comment = node.docComment;

    const result = parseTsDoc(comment);

    expect(result.blocks).toHaveLength(2);

    const returnVal = result.blocks.find((block) => block.type === '@returns');

    expect(returnVal).toBeDefined();
    if (returnVal?.text[0].type === 'paragraph') {
      expect(returnVal?.text[0].text).toEqual('foo bar');
    }
  });
});
