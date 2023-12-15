/*
 * @Author: yanqiang
 * @Date: 2023-12-15 17:39:55
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-15 17:46:04
 * @Description: 
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root =null;
        this.size = 0;
    }
    size() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
}