/*
 * @Author: yanqiang
 * @Date: 2023-12-05 16:32:59
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-05 17:45:04
 * @Description: 
 */

class MaxHeap{
    constructor(comparator=(a,b) => a - b) {
        this.data = []
        this.comparator = comparator
    }
    size() {
        return this.data.length
    }
    isEmpty() {
        return this.data.length === 0
    }
    swap(i, j) {
        [this.data[j], this.data[i]] = [this.data[i], this.data[j]]
    }
    parent(index) {
        if(index === 0) {
            throw new Error('index error')
        }
        return Math.floor((index - 1) / 2)
    }
    leftChild(index) {
        return index * 2 + 1
    }
    rightChild(index) {
        return index * 2 + 2
    }
    extractMax() {
        const res = this.data[0]
        this.data[0] = this.data.pop();
        this.siftDown(0)
        return res
    }
    add(ele) {
        this.data.push(ele)
        this.siftUp(this.data.length - 1)
    }
    siftUp(k) {
        while(k > 0 && this.comparator(this.data[this.parent(k)], this.data[k]) < 0) {
            this.swap(this.parent(k), k)
            k = this.parent(k)
        }
    }
    siftDown(k) {
        while(this.leftChild(k) < this.size()) {
            let j = this.leftChild(k)
            if(j + 1 < this.size() && this.comparator(this.data[j+1], this.data[j]) > 0) {
                j = j + 1
            }
            if(this.comparator(this.data[k], this.data[j]) > 0) {
                break
            }
            this.swap(k, j)
            k = j
        }
    }


}

const maxHeap = new MaxHeap()

for (let index = 0; index < 100; index++) {
    const num = Math.round(Math.random()*100)+ 1
    maxHeap.add(num)
}
const res = []
for (let index = 0; index < 100; index++) {
    res.push(maxHeap.extractMax())
}
console.log(res)