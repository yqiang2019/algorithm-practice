/*
 * @Author: yanqiang
 * @Date: 2023-12-08 11:31:50
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 11:37:09
 * @Description: 
 */


function deleteRepeat(head) {
    let curr = head;

    while(curr && curr.next) {
        if(curr.value === curr.next.value) {
            curr.next = curr.next.next
        }else {
            curr = curr.next;
        }
    }
}