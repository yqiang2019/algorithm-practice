/*
 * @Author: yanqiang
 * @Date: 2023-12-01 17:22:21
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-01 17:29:18
 * @Description: 
 */

// [12,3,4,45,1,2] => [1, 2, 3, 4]
function longestConsecutive(arr) {
    const set = new Set(arr);
    let max = 0;
    for (const num of set) {
        if(!set.has(num-1)) {
            let nextNum = num + 1;
            while(set.has(nextNum)) nextNum++;
            max = Math.max(max, nextNum - num)
        }
    }
    return max;
}
const arr = [12,3,4,45,1,2];
const r = longestConsecutive(arr);
console.log(r);