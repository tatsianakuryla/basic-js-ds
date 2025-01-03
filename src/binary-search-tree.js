const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addInside(this._root, data);

    function addInside(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(node.data > data) {
        node.left = addInside(node.left, data);
      }

      if(node.data < data) {
        node.right = addInside(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasInside(this._root, data);

    function hasInside(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      return node.data > data ?
          hasInside(node.left, data) :
          hasInside(node.right, data);
    }
  }

  find(data) {
    return findInside(this._root, data);

    function findInside(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return node.data > data ?
        findInside(node.left, data) :
        findInside(node.right, data);
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;

        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }

        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }

    }
  }

  min() {
    let node = this._root;

    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node = this._root;

    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};