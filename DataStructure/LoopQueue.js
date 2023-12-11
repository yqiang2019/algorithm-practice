class LoopQueue{
    constructor() {
        this.data = [];
        this.front = 0;
        this.tail = 0;
        this.size = 0;
    }
    getCapacity() {
        return this.data.length - 1;
    }
    isEmpty() {
        return this.front === this.tail;
    }
    getSize() {
        return this.size;
    }
}