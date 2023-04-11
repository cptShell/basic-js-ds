const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.value = null;
  }
  root() {
    return this.value;
  }

  add(data) {
    const node = new Node(data);
    let current = this.value;

    if (this.value === null) {
      this.value = node;
      return;
    } else {
      while (current) {
        if (node.data > current.data) {
          if (current.right === null) {
            current.right = node;
            return;
          }
          current = current.right;
        } else {
          if (current.left === null) {
            current.left = node;
            return;
          }
          current = current.left;
        }
      }
    }
  }

  find(data) {
    let current = this.value;

    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.value = insertNode(this.value, data);

    function insertNode(newData, data) {
      if (!newData) {
        return null;
      }
      if (data > newData.data) {
        newData.right = insertNode(newData.right, data);
        return newData;
      } else if (data < newData.data) {
        newData.left = insertNode(newData.left, data);
        return newData;
      } else {
        if (!newData.left && !newData.right) {
          return null;
        }
      }
      if (!newData.left) {
        newData = newData.right;
        return newData;
      }
      if (!newData.right) {
        newData = newData.left;
        return newData;
      }
      let minNode = newData.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      newData.data = minNode.data;
      newData.right = insertNode(newData.right, minNode.data);
      return newData;
    }
  }

  min() {
    let current = this.value;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.value;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
