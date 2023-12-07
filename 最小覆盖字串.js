/*
 * @Author: yanqiang
 * @Date: 2023-12-07 17:00:23
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-07 17:40:16
 * @Description: 
 */


function minWindow(s, t) {
    let l = 0;
    let r = 0;
    const need = new Map();
    for(let i = 0; i< t.length; i++) {
        const c = t[i];
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }
    let needType = need.size;
    let res = '';
    while(r < s.length) {
        if(need.has(s[r])){
            need.set(s[r], need.get(s[r]) - 1)
            if(need.get(s[r]) === 0) needType--;
        }
        while(needType === 0) {
            const newRes = s.substring(l, r + 1);
            if(!res || newRes.length < res.length) res = newRes;
            if(need.has(s[l])) {
                need.set(s[l], need.get(s[l]) + 1)
                if(need.get(s[l]) === 1) needType++;
            }
            l++;
        }
        r++;
    }
    return res;
}

const s1 = 'abdfswewercbvwecsfewr';
const s2 = 'wercs'
const res = minWindow(s1, s2)
console.log(res)