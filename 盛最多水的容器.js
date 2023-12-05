/*
 * @Author: yanqiang
 * @Date: 2023-12-05 16:07:13
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-05 16:14:32
 * @Description: 
 */


function maxWater(height) {
    let start = 0,
        end = height.length - 1,
        maxNum = 0;

    while(start < end) {
        let high = 0
        const width = end - start
        if(height[start] > height[end]) {
            high = height[end]
            end--
        }else {
            high =height[start]
            start++
        }
        maxNum = Math.max(maxNum, width * high)
    }
    return maxNum
}

const height = [1,3,2,5,6,21,4,11]
const res = maxWater(height)
console.log(res)