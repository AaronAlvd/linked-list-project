// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.head) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        let newNode = new DoublyLinkedNode(val);
        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) return;

        let val = this.head.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return val;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.tail) return;

        let val = this.tail.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return val;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;
        return this.head.value; 

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        if (!this.tail) return;
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
