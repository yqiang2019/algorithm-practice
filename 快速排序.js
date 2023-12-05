/*
 * @Author: yanqiang
 * @Date: 2023-12-01 10:23:41
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-01 10:54:09
 * @Description: 
 */


function quickSort(arr, left, right) {
    if(left >= right) {
        return;
    }
    const base = arr[left];
    let i = left,
        j = right;
    

    while( i !== j ) {
        while(j > i && arr[j] > base) {
            j--;
        }
        while(i < j && arr[i] <= base) {
            i++
        }
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    const temp = arr[i];
    arr[i] = base;
    arr[left] = temp;
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
} 
let a = [12, 34, 1, 5, 33, 77, 14];
console.log(a);
quickSort(a, 0, a.length - 1);
console.log(a);