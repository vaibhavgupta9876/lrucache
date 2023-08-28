
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
    limit() {
        return this.#limit;
    }
    get(key){}

    insert(key, value){}
}

module.exports = Cache;