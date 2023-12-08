/*
 * @Author: yanqiang
 * @Date: 2023-12-08 09:57:22
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 10:10:18
 * @Description: 
 */


function isValid(s) {
    if(s.length % 2 === 1) return false

    const stack = [];
    const map = new Map();
    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')

    for (const c of s) {
        if(map.has(c)) {
            stack.push(c)
        }else {
            const t = stack.pop();
            if(map.get(t) !== c) {
                return false
            }
        }
    }
    return stack.length === 0;
}

const s = '{}{}[]()(('
const res = isValid(s)
console.log(res)