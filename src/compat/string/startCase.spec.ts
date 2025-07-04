import { describe, expect, expectTypeOf, it } from 'vitest';
import type { startCase as startCaseLodash } from 'lodash';
import { startCase } from './startCase';

describe('startCase', () => {
  const strings = ['foo bar', 'Foo bar', 'foo Bar', 'Foo Bar', 'FOO BAR', 'fooBar', '--foo-bar--', '__foo_bar__'];

  it(`should convert \`string\``, () => {
    const actual = strings.map(string => startCase(string));

    const expected = strings.map(string => (string === 'FOO BAR' ? 'FOO BAR' : 'Foo Bar'));

    expect(actual).toEqual(expected);
  });

  it(`should handle double-converting strings`, () => {
    const actual = strings.map(string => startCase(startCase(string)));

    const expected = strings.map(string => (string === 'FOO BAR' ? 'FOO BAR' : 'Foo Bar'));

    expect(actual).toEqual(expected);
  });

  it(`should remove contraction apostrophes`, () => {
    const postfixes = ['d', 'll', 'm', 're', 's', 't', 've'];

    ["'", '\u2019'].forEach(apos => {
      const actual = postfixes.map(postfix => startCase(`a b${apos}${postfix} c`));

      const expected = postfixes.map(postfix => `A B${postfix} C`);

      expect(actual).toEqual(expected);
    });
  });

  it(`should remove Latin mathematical operators`, () => {
    const actual = ['\xd7', '\xf7'].map(startCase);
    expect(actual).toEqual(['', '']);
  });

  it(`should coerce \`string\` to a string`, () => {
    const string = 'foo bar';
    expect(startCase(Object(string))).toBe('Foo Bar');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(startCase({ toString: () => string })).toBe('Foo Bar');
  });

  it('should uppercase only the first character of each word', () => {
    expect(startCase('--foo-bar--')).toBe('Foo Bar');
    expect(startCase('fooBar')).toBe('Foo Bar');
    expect(startCase('__FOO_BAR__')).toBe('FOO BAR');
  });

  it('should match the type of lodash', () => {
    expectTypeOf(startCase).toEqualTypeOf<typeof startCaseLodash>();
  });
});
