'use strict';

/**
 * Проверяет, что скобки ()[]{}<> в строке сбалансированы.
 * Закрывающая скобка должна соответствовать последней незакрытой открывающей,
 * в конце не должно остаться незакрытых скобок.
 *
 * Время:  O(n) - один проход по строке, push/pop стека за O(1).
 * Память: O(n) - в худшем случае (все скобки открывающие) стек хранит n элементов.
 * Символы, не являющиеся скобками, игнорируются.
 */
function isBalanced(str) {
  const pairs = { ')': '(', ']': '[', '}': '{', '>': '<' };
  const openers = new Set(Object.values(pairs));
  const stack = [];

  for (const ch of str) {
    if (openers.has(ch)) {
      stack.push(ch);
    } else if (ch in pairs) {
      // закрывающая без пары или не того типа
      if (stack.length === 0 || stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0; // остались незакрытые скобки -> false
}

module.exports = { isBalanced };

if (require.main === module) {
  const assert = require('assert');

  const cases = [
    ['({})', true],
    ['({)}', false],
    ['', true],
    ['<[{()}]>', true],
    ['(', false],
    [')(', false],
    ['([)]', false],
    ['a(b[c]{d}<e>)', true],
    ['((>', false],
  ];

  for (const [text, expected] of cases) {
    assert.strictEqual(isBalanced(text), expected, text);
    console.log(`isBalanced(${JSON.stringify(text)}) -> ${expected}`);
  }
  console.log('Тесты скобок пройдены.');
}
