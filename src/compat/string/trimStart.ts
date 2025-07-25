import { trimStart as trimStartToolkit } from '../../string/trimStart.ts';

/**
 * Removes leading whitespace or specified characters from a string.
 *
 * @param {string} string - The string to trim.
 * @param {string} chars - The characters to trim from the start of the string.
 * @returns {string} Returns the trimmed string.
 *
 * @example
 * trimStart('  abc  ');
 * // => 'abc  '
 *
 * trimStart('-_-abc-_-', '_-');
 * // => 'abc-_-'
 */
export function trimStart(string?: string, chars?: string): string;

/**
 * Removes leading whitespace or specified characters from a string.
 *
 * @param {string} string - The string to trim.
 * @param {string | number} index - The index parameter (used with guard).
 * @param {object} guard - Enables use as an iteratee for methods like `map`.
 * @returns {string} Returns the trimmed string.
 *
 * @example
 * trimStart('  abc  ', 0, {});
 * // => 'abc  '
 */
export function trimStart(string: string, index: string | number, guard: object): string;

/**
 * Removes leading whitespace or specified characters from a string.
 *
 * @param {string} str - The string from which leading characters will be trimmed.
 * @param {string | number} chars - The character(s) to remove from the start of the string.
 * @param {object} guard - Enables use as an iteratee for methods like `map`.
 * @returns {string} Returns the trimmed string.
 *
 * @example
 * trimStart('  abc  ');
 * // => 'abc  '
 *
 * trimStart('-_-abc-_-', '_-');
 * // => 'abc-_-'
 */
export function trimStart(str?: string, chars?: string | number, guard?: object): string {
  if (str == null) {
    return '';
  }

  if (guard != null || chars == null) {
    return str.toString().trimStart();
  }

  return trimStartToolkit(str, chars.toString().split(''));
}
