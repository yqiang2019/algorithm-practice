/*
 * @Author: yanqiang
 * @Date: 2023-12-08 10:52:39
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-08 10:56:23
 * @Description: 
 */


class RecentCounter{
    constructor() {
        this.q = [];
    }
    ping(t) {
        this.q.push(t);
        while(this.q[0] < t - 3000) {
            this.q.shift()
        }
        return this.q.length;
    }
}