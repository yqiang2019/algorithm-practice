const node4 = {
    value: 4,
    next: null
}
const node3 = {
    value: 3,
    next: node4
}
const node2 = {
    value: 2,
    next: node3
}
const node1 = {
    value: 1,
    next: node2
}


function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
console.log(node1);
const head = reverseLinkedList(node1);
console.log(head);