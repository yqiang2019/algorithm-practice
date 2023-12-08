/*
 * @Author: yanqiang
 * @Date: 2023-12-08 14:18:59
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 16:04:43
 * @Description: 
 */


class MinHeap {
    constructor(selector=(n) => n) {
        this.heap = [];
        this.selector = selector;
    }
    parent(i) {
        return (i - 1) >> 1;
    }
    leftChild(i) {
        return i * 2 + 1;
    }
    rightChild(i) {
        return i * 2 + 2;
    }
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
    siftUp(i) {
        if(i === 0) return;
        const parentIndex = this.parent(i);
        if(this.selector(this.heap[parentIndex]) > this.selector(this.heap[i])) {
            this.swap(parentIndex, i);
            this.siftUp(parentIndex);
        }
    }
    siftDown(i) {
        let leftIndex = this.leftChild(i);
        let rightIndex = this.rightChild(i);
        if(leftIndex >= this.heap.length) return
        if(rightIndex < this.heap.length && this.selector(this.heap[rightIndex]) < this.selector(this.heap[leftIndex])) {
            leftIndex = rightIndex
        };
        if(this.selector(this.heap[i]) > this.selector(this.heap[leftIndex])) {
            this.swap(i, leftIndex);
            this.siftDown(leftIndex);
        }

    }
    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }
    pop() {
        if(this.heap.length < 1) return;
        if(this.heap.length === 1) return this.heap.shift();
        const top = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return top;
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}
module.exports = MinHeap;
