/*
 * @Author: yanqiang
 * @Date: 2023-12-08 11:18:30
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 11:19:30
 * @Description: 
 */


function deleteNode(node) {
    node.value = node.next.value;
    node.next = node.next.next;
}