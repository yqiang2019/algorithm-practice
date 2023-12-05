/*
 * @Author: yanqiang
 * @Date: 2023-12-01 11:16:39
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-01 13:51:55
 * @Description: 
 */



function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let midleIndex = Math.floor(arr.length - 1 / 2);
    let arr1 = mergeSort(arr.slice(0, midleIndex));
    let arr2 = mergeSort(arr.slice(midleIndex));

    let res = [];
    let i = 0,
        j = 0;
    while(i <= arr1.length - 1 && j <= arr2.length - 1) {
        if(arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++;
        } 
        if(arr1[i] > arr2[j]) {
            res.push(arr2[j])
            j++;
        } 
        if(arr1[i] == arr2[j]) {
            res.push(arr2[j], arr1[i])
            i++;
            j++;
        } 
    }
    if(i <= arr1.length - 1) {
        res.push(...arr1.slice(i))
    }
    if(j <= arr2.length - 1) {
        res.push(...arr2.slice(j))
    }
    return res;
}
let a = [12, 34, 1, 5, 33, 77, 14];
const r = mergeSort(a);
console.log(r);
