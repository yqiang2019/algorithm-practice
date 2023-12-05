/*
 * @Author: yanqiang
 * @Date: 2023-12-04 17:38:31
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-04 17:42:50
 * @Description: 
 */


function reverseNumber(x) {
    let temp = 0;

    while(x) {
        temp = temp * 10 + x % 10;
        x = ~~(x / 10);
    }
    return temp;
}

let num = -1456;
const res = reverseNumber(num);
console.log(res);