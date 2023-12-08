/*
 * @Author: yanqiang
 * @Date: 2023-12-08 17:34:56
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 17:41:59
 * @Description: 
 */

class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value || undefined;
    }
}
class LinkedList {
    constructor() {
        this.dummyHead = new ListNode(-1);
        this.tail = this.dummyHead;
        return this.dummyHead.next
    }
    add(value) {
        const newNode = new ListNode(value)
        this.tail.next = newNode;
        this.tail = this.tail.next;
    }
}

module.exports = {
    ListNode,
    LinkedList
}