/*
 * @Author: yanqiang
 * @Date: 2023-12-15 10:57:13
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-15 14:09:02
 * @Description: 
 */


class Node {
    constructor(isWord = false) {
        this.isWord = isWord;
        this.next = new Map();
    }
}
class Trie {
    constructor() {
        this.root = new Node();
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    add(word) {
        let cur = this.root;
        for (const c of word) {
            if(!cur.next.has(c)) {
                cur.next.set(c, new Node())
            }
            cur = cur.next.get(c)
        }
        if(!cur.isWord) {
            cur.isWord = true;
            this.size++;
        }
    }
    contains(word) {
        let cur = this.root;
        for (const c of word) {
            if(!cur.next.has(c)) {
                return false
            }
            cur = cur.next.get(c)
        }
        return cur.isWord;
    }
    isPrefix(prefix) {
        let cur = this.root;
        for (const c of prefix) {
            if(!cur.next.has(c)) {
                return false;
            }
            cur = cur.next.get(c);
        }
        return true;

    }
    search(word) {
        return this.match(this.root, word, 0)
    }
    match(node, word, index) {
        if(word.length === index) return true;

        let c = word[index];
        if(c !== '.') {
            if(!node.next.has(c)) return false;
            return this.match(node.next.get(c), word, index + 1)
            
        }else {
            for (const [_, value] of node.next) {
                if(this.match(value, word, index + 1)) return true
            }
            return false;
        }
    }
}