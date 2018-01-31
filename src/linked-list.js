const Node = require('./node');

class LinkedList {


    constructor() {this.length = 0;
      this._head = null
      this._tail = null

    }

    append(data) {
      if (this.length === 0){
      this._head = new Node(data);
      this._tail = new Node(data);
    }
      else if (this.length === 1) {
        this._tail = new Node(data);
        this._head.next = this._tail;
        this.tail.prev = this._head;
      }
     else {
       this._tail.next = new Node(data);
       this._tail.next.prev = this._tail;
       this._tail = this._tail.next;
     }
     this.length++
     return this

    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._head.data;
    }

    at(index) {
      var item = this._head;
      while (index > 0) {
        item = item.next;
        index--;
      }
      return item.data

    }

    insertAt(index, data) {
        var node = new Node(data);
        var pos = this.length - index;
        console.log (pos, index, this.length);
        node.prev = this._tail;
        while (pos > 0) {
          node.prev = node.prev.prev;
          pos--
        }
        node.next = node.prev.next;
        node.prev.next = node;
        node.next.prev = node;
        return this
    }

    isEmpty() {
      if (this.length === 0 ) {
        return true
      }
      return false
    }

    clear() {
      this.length = 0;
      this._head.data = null;
      this._tail.data = null;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
