const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.node = null;
  }
  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if (this.node === null) {
      this.node = new ListNode(value);
      return;
    }

    const goDeeper = (node) => {
      return node.next
        ? goDeeper(node.next)
        : (node.next = new ListNode(value));
    };
    goDeeper(this.node);
  }

  dequeue() {
    const value = this.node.value;
    this.node = this.node.next;
    return value;
  }
}
module.exports = {
  Queue,
};
