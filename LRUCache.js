class Cache{
    #limit;
    constructor(limit) {
        if (this.constructor == Cache) {
            throw new Error("Cannot instantiate an abstract class");
        }
        else {
            this.#limit = limit;
        }
    }

    get(key){}

    insert(key, value){}
}

class Node{
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList{
    constructor() {
        this.head = new Node(-1, null, null);
        this.tail = new Node(-1, null, null);
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
        tempNode.prev = node;
    }

    remove(node) { 
         if (! node instanceof Node) {
            throw new Error("Can add only nodes in linked list");
        }
        const previousNode = node.prev;
        previousNode.next = node.next;
        node.next.prev = previousNode;
    }
}

class LRUCache extends Cache{
    constructor(limit) {
        super(limit);
        this.counter = 0;
        this.list = new LinkedList();
        this.cache = {};

    }   

    get(key) {
        if (this.cache[key] == undefined) {
            return null;
        }
        else {
            const val = this.cache[key].value;
            list.remove(this.cache[key]);
            const newNode = new Node(val, null, null);
            list.add(newNode);
            this.cache[key] = newNode;
            return val;
        }
        
    }
    insert(key, value) {
       
        if (this.cache[key] != undefined) {
            this.list.remove(this.cache[key]);
            const newNode = new Node(value, null, null);
            list.add(newNode);
            this.cache[key] = newNode;
            return val;
            
        }

        
    }

}

const test = { "h": "l" };
console.log(test["h"]);
