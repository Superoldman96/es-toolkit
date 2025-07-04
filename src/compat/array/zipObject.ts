import { assignValue } from '../_internal/assignValue.ts';

/**
 * Combines two arrays, one of property names and one of corresponding values, into a single object.
 *
 * @template T - The type of values in the values array
 * @param {ArrayLike<PropertyKey>} props - An array of property names
 * @param {ArrayLike<T>} values - An array of values corresponding to the property names
 * @returns {Record<string, T>} A new object composed of the given property names and values
 *
 * @example
 * const props = ['a', 'b', 'c'];
 * const values = [1, 2, 3];
 * zipObject(props, values);
 * // => { a: 1, b: 2, c: 3 }
 */
export function zipObject<T>(props: ArrayLike<PropertyKey>, values: ArrayLike<T>): Record<string, T>;

/**
 * Creates an object from an array of property names, with undefined values.
 *
 * @param {ArrayLike<PropertyKey>} [props] - An array of property names
 * @returns {Record<string, undefined>} A new object with the given property names and undefined values
 *
 * @example
 * const props = ['a', 'b', 'c'];
 * zipObject(props);
 * // => { a: undefined, b: undefined, c: undefined }
 */
export function zipObject(props?: ArrayLike<PropertyKey>): Record<string, undefined>;

/**
 * Combines two arrays, one of property names and one of corresponding values, into a single object.
 *
 * This function takes two arrays: one containing property names and another containing corresponding values.
 * It returns a new object where the property names from the first array are keys, and the corresponding elements
 * from the second array are values. If the `keys` array is longer than the `values` array, the remaining keys will
 * have `undefined` as their values.
 *
 * @template P - The type of elements in the array.
 * @template V - The type of elements in the array.
 * @param {ArrayLike<K>} keys - An array of property names.
 * @param {ArrayLike<V>} values - An array of values corresponding to the property names.
 * @returns {Record<K, V>} - A new object composed of the given property names and values.
 *
 * @example
 * const keys = ['a', 'b', 'c'];
 * const values = [1, 2, 3];
 * const result = zipObject(keys, values);
 * // result will be { a: 1, b: 2, c: 3 }
 *
 * const keys2 = ['a', 'b', 'c'];
 * const values2 = [1, 2];
 * const result2 = zipObject(keys2, values2);
 * // result2 will be { a: 1, b: 2, c: undefined }
 *
 * const keys2 = ['a', 'b'];
 * const values2 = [1, 2, 3];
 * const result2 = zipObject(keys2, values2);
 * // result2 will be { a: 1, b: 2 }
 */
export function zipObject<K extends PropertyKey, V>(keys: ArrayLike<K> = [], values: ArrayLike<V> = []): Record<K, V> {
  const result = {} as Record<K, V>;

  for (let i = 0; i < keys.length; i++) {
    assignValue(result, keys[i], values[i]);
  }

  return result;
}
