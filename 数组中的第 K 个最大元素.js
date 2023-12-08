/*
 * @Author: yanqiang
 * @Date: 2023-12-08 15:55:24
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 16:23:19
 * @Description: 
 */
const MinHeap = require("./DataStructure/MinHeap");


function findKMax(nums, k) {
    const minHeap = new MinHeap();

    nums.forEach(n => {
        minHeap.insert(n);
        if(minHeap.size() > k) {
            minHeap.pop()
        }
    })
    return minHeap.peek()
}
const nums = [1,4,6,2,77,43,22]
const res = findKMax(nums, 3);
console.log(res);