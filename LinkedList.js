const Node = require("./Node");

class LinkedList{
    constructor() {
        this.head = new Node(-1, -1, null, null);
        this.tail = new Node(-1, -1, null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        
    }

    add(node) { //add the nodes to the front
        if (! node instanceof Node) {
            throw new Error("Can add only nodes in linked list");
        }
        const tempNode = this.head.next;
        this.head.next = node;
        node.next = tempNode;
        node.prev = this.head;
        tempNode.prev = node;
    }

    remove(node) { 
         if (! node instanceof Node) {
            throw new Error("Can add only nodes in linked list");
         }
        const previousNode = node.prev; 
        previousNode.next = node.next;
        node.next.prev = previousNode;
        return node;
    }
}

module.exports =  LinkedList;