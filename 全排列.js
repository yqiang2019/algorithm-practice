/*
 * @Author: yanqiang
 * @Date: 2023-12-07 14:55:22
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-07 15:52:05
 * @Description: 
 */


function permute(nums) {
    const res = []
    const dfs = (path) => {
        if(path.length === nums.length) {
            res.push(path)
            return;
        }
        nums.forEach(num => {
            if(path.includes(num)) return;
            dfs(path.concat(num))
        })
    }
    dfs([])
    return res
}
const arr = [1,2,3]
const res =permute(arr)

console.log(res)