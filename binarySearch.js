'use strict';

/**
 * Бинарный поиск в массиве, отсортированном по возрастанию.
 * Возвращает индекс элемента или -1, если его нет.
 *
 * Время:  O(log n) - на каждом шаге интервал поиска сокращается вдвое.
 *         Лучший случай O(1) (элемент в середине).
 * Память: O(1) - итеративная реализация.
 *
 * Если массив не отсортирован, сначала нужна сортировка за O(n log n);
 * для единичного поиска тогда выгоднее линейный перебор за O(n).
 */
function binarySearch(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

module.exports = { binarySearch };

if (require.main === module) {
  const assert = require('assert');

  const arr = [-3, 0, 1, 2, 5, 5, 6, 9];
  assert.strictEqual(binarySearch(arr, 6), 6);
  assert.strictEqual(binarySearch(arr, -3), 0);
  assert.strictEqual(binarySearch(arr, 9), 7);
  assert.strictEqual(binarySearch(arr, 100), -1);
  assert.strictEqual(binarySearch(arr, 3), -1);
  assert.strictEqual(binarySearch([], 1), -1);
  assert.strictEqual(binarySearch([7], 7), 0);

  console.log('binarySearch(6) ->', binarySearch(arr, 6));
  console.log('Тесты бинарного поиска пройдены.');
}
