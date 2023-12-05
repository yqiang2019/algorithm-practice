/*
 * @Author: yanqiang
 * @Date: 2023-12-04 16:47:10
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-04 17:05:48
 * @Description: 
 */


function Node(value, next) {
    this.value = value || 0;
    this.next = next || null;
}

function addTwoNumbers(one, two) {
    let dummyHead = new Node(-1);
    let sum = 0;
    let carry = 0;

    let curr = dummyHead;

    while(one || two || carry) {
        let oneVal = one && one.value || 0;
        let twoVal = two && two.value || 0;
        sum = oneVal + twoVal + carry;
        sum >= 10 ? carry = 1 : carry = 0;
        curr.next = new Node(sum % 10);
        curr = curr.next;
        one && (one = one.next);
        two && (two = two.next);

    }
    return dummyHead.next
}

const one = new Node(1, new Node(3, new Node(2)));
const two = new Node(1, new Node(3));
const res = addTwoNumbers(one, two);
console.log(res)

