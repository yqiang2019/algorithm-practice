/*
 * @Author: yanqiang
 * @Date: 2023-12-15 16:07:18
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-15 17:30:36
 * @Description: 
 */


class UnionFind1{
    constructor(size) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        for (let i = 0; i < size; i ++) {
            this.rank[i] = 1;
        }
    }
    getSize() {
        return this.parent.length;
    }
    find(p) {
        if(p < 0 || p >= this.parent.length) return;

        while(p !== this.parent[p]) {
            p = this.parent[p]
        }
        return p;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q)
    }
    unionELements(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if(pRoot == qRoot) return;
        if(this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        }else if(this.rank[qRoot] < this.rank[pRoot]){
            this.parent[qRoot] = pRoot;
        }else {
            this.parent[qRoot] = pRoot;
            this.rank[pRoot] += 1;
        }
    }
}

class UnionFind2{
    constructor(size) {
        this.parent = new Array(size);
        this.sz = new Array(size);
        for (let i = 0; i < size; i ++) {
            this.sz[i] = 1;
        }
    }
    getSize() {
        return this.parent.length;
    }
    find(p) {
        if(p < 0 || p >= this.parent.length) return;

        while(p !== this.parent[p]) {
            p = this.parent[p]
        }
        return p;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q)
    }
    unionELements(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if(pRoot == qRoot) return;
        if(this.sz[pRoot] < this.sz[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        }else {
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    }
}
class UnionFind3{
    constructor(size) {
        this.parent = new Array(size);
        this.sz = new Array(size);
        for (let i = 0; i < size; i ++) {
            this.sz[i] = 1;
        }
    }
    getSize() {
        return this.parent.length;
    }
    find(p) {
        if(p < 0 || p >= this.parent.length) return;

        while(p !== this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]] //路径压缩
            p = this.parent[p]
        }
        return p;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q)
    }
    unionELements(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if(pRoot == qRoot) return;
        if(this.sz[pRoot] < this.sz[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        }else {
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    }
}

class UnionFind4{
    constructor(size) {
        this.parent = new Array(size);
        this.sz = new Array(size);
        for (let i = 0; i < size; i ++) {
            this.sz[i] = 1;
        }
    }
    getSize() {
        return this.parent.length;
    }
    find(p) {
        if(p < 0 || p >= this.parent.length) return;

        if(p !== this.parent[p]) {
            this.parent[p] = this.find[this.parent[p]] //路径压缩
        }
        return this.parent[p];
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q)
    }
    unionELements(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if(pRoot == qRoot) return;
        if(this.sz[pRoot] < this.sz[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        }else {
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    }
}