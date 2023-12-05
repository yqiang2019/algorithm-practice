/*
 * @Author: yanqiang
 * @Date: 2023-12-01 17:34:07
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-01 17:44:13
 * @Description: 
 */


function twoSum(arr, target) {
    const map = new Map();
    for (const num of arr) {
        const res = target - num;
        if(!map.has(res)) {
            map.set(num, 1);
        }else {
            return [res, num];
        }
    }
}

const arr = [12,23,1,4,6,33];
const r = twoSum(arr, 10);
console.log(r);