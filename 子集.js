/*
 * @Author: yanqiang
 * @Date: 2023-12-07 16:11:02
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-07 16:27:46
 * @Description: 
 */


function subsets(nums) {
    const res = [];
    const dfs = (path, len, start) => {
        if(path.length === len) {
            res.push(path)
            return;
        }
        for(let i = start; i<nums.length; i++) {
            dfs(path.concat(nums[i]), len, i + 1)
        }
    }
    for (let index = 0; index <= nums.length; index++) {
        dfs([], index, 0)
    }
    return res;
}

const arr = [1,2,3,4]
const res = subsets(arr)
console.log(res)