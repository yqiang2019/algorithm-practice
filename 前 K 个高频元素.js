/*
 * @Author: yanqiang
 * @Date: 2023-12-08 16:42:30
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 17:08:18
 * @Description: 
 */
const MinHeap = require("./DataStructure/MinHeap");


function topKFrecency(nums, k) {
    const map = new Map();
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1)
    });
    const minHeap = new MinHeap((v) => v.value)
    map.forEach((value, key)=> {
        minHeap.insert({value, key});
        if(minHeap.size() > k) {
            minHeap.pop()
        }
    })
    return minHeap.heap.map(v => v.key)

}

const a = [1,1,1,3,4,4,2,3,65,34,34,33,33,33]
const res = topKFrecency(a, 3);
console.log(res);