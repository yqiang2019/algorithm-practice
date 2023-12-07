/*
 * @Author: yanqiang
 * @Date: 2023-12-07 14:04:16
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-07 14:22:53
 * @Description: 
 */


function merge(arr1, m, arr2, n) {
    if(!arr2.length || !n ) return
    if(!arr1.length || !m) {
        for( let i = 0; i < n; i++) {
            arr1[i] = arr2.shift()
        }
    }

    let i = m - 1,
        j = n - 1,
        k = m + n - 1;

    while(i >=0 && j >=0 ) {
        if(arr1[i] >= arr2[j]) {
            arr1[k--] = arr1[i--]
        }
        if(arr1[i] < arr2[j]) {
            arr1[k--] = arr2[j--]
        }

        if(i < 0) {
            while(j >=0) {
                arr1[k--] = arr2[j--]
            }
        }
    }
}

const arr1 = [1,2,4,6,11];
const arr2 = [4,7,8,10,12,33,34];
merge(arr1,arr1.length, arr2, arr2.length)
console.log(arr1)