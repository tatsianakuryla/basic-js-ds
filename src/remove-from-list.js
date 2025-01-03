const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(value) {
 *     this.value = value;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  while (l && l.value === k) {
    l = l.next;
  }

  if (!l) {
    return l;
  }

  let current = l;
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    }
    else {
      current = current.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
