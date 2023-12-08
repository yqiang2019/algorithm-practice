const { ListNode } = require("./DataStructure/LinkedList");
const MinHeap = require("./DataStructure/MinHeap");


function mergeKLists(list) {
    const minHeap = new MinHeap((v) => v.value);
    const dummyHead = new ListNode(-1);
    let curr = dummyHead;
    list.forEach(l => {
        minHeap.insert(l);
    });
    while(minHeap.size()) {
        const n = minHeap.pop();
        curr.next = n;
        curr = curr.next;
        if(n.next) minHeap.insert(n.next)
    }
    return dummyHead.next;
}