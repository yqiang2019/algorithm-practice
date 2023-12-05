/*
 * @Author: yanqiang
 * @Date: 2023-12-04 17:15:42
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-04 17:28:50
 * @Description: 
 */


function lengthOfLongestSubstring(s) {
    let len = s.length;
    let maxLen = 0;
    let left = 0;
    const map = new Map();

    for(let right = 0; right < len - 1; right++) {
        if(map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1;
        }
        maxLen = Math.max(maxLen, right - left + 1)
        map.set(s[right], right)
    }
    return maxLen;
}

let str = 'asdafdgdfgqweq';
const res = lengthOfLongestSubstring(str);
console.log(res);