// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++; 
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // the time complexity is O(n), we're iterating over the list. 
    }

    removeFromHead() {
        // Remove node at head
        if (this.head === null) return;
        const value = this.head;
        this.head = this.head.next;
        this.length--;
        return value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {   
        // Remove node at tail
        if (this.head === null) return;
  
       if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            this.length--;
            return value;
        }
        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next
        }                               
        let value = curr.next;
        curr.next = null;
        this.length--;
        return value;

        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(n), we are iterating to the tail.
    }

    peekAtHead() {
        // Return the value of head node
        if(!this.head) return;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(1), no iteration.
    }

    print() {
        // Print out the linked list

        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
