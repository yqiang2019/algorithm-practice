/*
 * @Author: yanqiang
 * @Date: 2023-12-08 14:03:58
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 14:07:39
 * @Description: 
 */

// 双指针
function hasCircle(head) {
    let p1 = head;
    let p2 = head;

    while(p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) {
            return true;
        }
    }
    return false;
}