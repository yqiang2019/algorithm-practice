/*
 * @Author: yanqiang
 * @Date: 2023-12-11 17:02:36
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-11 17:14:27
 * @Description: 
 */


function hasSum(root, sum) {
    if(!root) return false
    if(!root.left && !root.right && sum==0) {
        return true
    }
    const hasLSum = hasSum(root.left, sum - root.value)
    const hasRSum = hasSum(root.right, sum - root.value)
    return hasLSum || hasRSum;
}