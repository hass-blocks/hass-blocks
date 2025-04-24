import { condenseRichText } from './condense-rich-text';

describe('condense rich text', () => {
  it('converts a simple array of strings to strings', () => {
    const result = condenseRichText(['foo', ' bar']);
    expect(result).toEqual('foo bar');
  });

  it('joins strings at the start of an array', () => {
    const result = condenseRichText([
      'foo',
      ' bar',
      { type: 'link', text: 'foo', link: 'bar' },
    ]);
    expect(result).toEqual([
      'foo bar',
      { type: 'link', text: 'foo', link: 'bar' },
    ]);
  });

  it('joins strings at the end of the array', () => {
    const result = condenseRichText([
      'foo',
      ' bar',
      { type: 'link', text: 'foo', link: 'bar' },
      'bar',
      ' bar',
    ]);
    expect(result).toEqual([
      'foo bar',
      { type: 'link', text: 'foo', link: 'bar' },
      'bar bar',
    ]);
  });

  it('handles multiple objects', () => {
    const result = condenseRichText([
      'foo',
      ' bar',
      { type: 'link', text: 'foo', link: 'bar' },
      'bar ',
      'baz',
      { type: 'link', text: 'foo', link: 'bar' },
      'bar',
      { type: 'link', text: 'foo', link: 'bar' },
      'bar',
      ' bip',
    ]);
    expect(result).toEqual([
      'foo bar',
      { type: 'link', text: 'foo', link: 'bar' },
      'bar baz',
      { type: 'link', text: 'foo', link: 'bar' },
      'bar',
      { type: 'link', text: 'foo', link: 'bar' },
      'bar bip',
    ]);
  });
});
