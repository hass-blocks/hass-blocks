import { flattenMultiLevelObject } from './flatten-multi-level-object';
describe('convert-object-to-paths', () => {
  it('returns an empty object for an empty object', () => {
    const result = flattenMultiLevelObject({});

    expect(result).toEqual({});
  });

  it('If returned a single levelled object it simply returns it', () => {
    const result = flattenMultiLevelObject({ foo: 'bar', baz: 'bash' });

    expect(result).toEqual({ foo: 'bar', baz: 'bash' });
  });

  it('returns keys that are period separated paths for multi level objects', () => {
    const result = flattenMultiLevelObject({
      foo: 'bar',
      baz: 'bash',
      bash: {
        bap: 'boo',
        bip: 'bif',
      },
    });

    expect(result).toEqual({
      foo: 'bar',
      baz: 'bash',
      'bash.bap': 'boo',
      'bash.bip': 'bif',
    });
  });

  it('works several levels deep', () => {
    const result = flattenMultiLevelObject({
      foo: 'bar',
      baz: 'bash',
      bash: {
        bap: 'boo',
        bip: 'bif',
        bing: {
          bop: 'bash',
          bip: 'bash',
          bing: {
            baz: 'bish',
          },
        },
      },
    });

    expect(result).toEqual({
      foo: 'bar',
      baz: 'bash',
      'bash.bing.bop': 'bash',
      'bash.bing.bip': 'bash',
      'bash.bing.bing.baz': 'bish',
      'bash.bap': 'boo',
      'bash.bip': 'bif',
    });
  });
});
