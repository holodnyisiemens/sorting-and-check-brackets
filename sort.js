'use strict';

/**
 * Сортировка слиянием (merge sort).
 * Возвращает новый отсортированный массив, исходный не меняется.
 *
 * Время:  O(n log n) в лучшем, среднем и худшем случае
 *         (log n уровней рекурсии, на каждом уровне слияние за O(n)).
 * Память: O(n) - вспомогательные массивы при слиянии.
 * Сортировка устойчивая.
 */

function mergeSort(arr, compare = (a, b) => a - b) {
  if (arr.length <= 1) return arr.slice();

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), compare);
  const right = mergeSort(arr.slice(mid), compare);

  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    // <= 0 сохраняет устойчивость
    if (compare(left[i], right[j]) <= 0) result.push(left[i++]);
    else result.push(right[j++]);
  }
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);
  return result;
}

module.exports = { mergeSort };

if (require.main === module) {
  const assert = require('assert');

  const data = [5, 2, 9, 1, 5, 6, -3, 0];
  const sorted = mergeSort(data);
  assert.deepStrictEqual(sorted, [...data].sort((a, b) => a - b));
  assert.deepStrictEqual(mergeSort([]), []);
  assert.deepStrictEqual(mergeSort([1]), [1]);
  assert.deepStrictEqual(data, [5, 2, 9, 1, 5, 6, -3, 0]); // исходный не изменён

  console.log('mergeSort:', sorted);
  console.log('Тесты сортировки пройдены.');
}
