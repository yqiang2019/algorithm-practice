/*
 * @Author: yanqiang
 * @Date: 2023-12-07 14:48:12
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-07 14:53:37
 * @Description: 
 */


function compareVersion(v1, v2) {
    const v1Arr = v1.split('.')
    const v2Arr = v2.split('.')
    const maxLen = Math.max(v1Arr.length, v2Arr.length)

    for(let i = 0; i< maxLen; i++) {
        const n1 = v1Arr[i] ? v1Arr[i] - '0' : 0
        const n2 = v2Arr[i] ? v2Arr[i] - '0' : 0
        if(n1 > n2) return 1
        if(n1 < n2) return -1
    }
}

const v1 = '2.0.2'
const v2 = '2.0.1'
const res = compareVersion(v1, v2)
console.log(res)