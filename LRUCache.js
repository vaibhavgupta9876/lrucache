const LinkedList =  require( "./LinkedList");
const Cache = require("./Cache");
const Node = require("./Node");

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
            const node = this.list.remove(this.cache[key]);
            this.list.add(node);
            return val;
        }
        
    }
    insert(key, value) {
       
        if (this.cache[key] != undefined) {
            const node = this.list.remove(this.cache[key]);
            node.value = value;
            this.list.add(node);
            this.cache[key] = node;
           
        }
        else {
            if (this.counter < this.limit()) {
                this.counter++;

                const newNode = new Node(key,value, null, null);
                this.list.add(newNode);
                this.cache[key] = newNode;
            }
            else {
                this.counter++;
                const lastNode = this.list.remove(this.list.tail.prev);
                const keyToDelete = lastNode.key; 
                delete this.cache[keyToDelete];
                lastNode.key = key;
                lastNode.value = value;
                this.list.add(lastNode);
                this.cache[key] = lastNode;
                
            }
        }

        
    }

}

module.exports = LRUCache;