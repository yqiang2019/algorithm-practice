/*
 * @Author: yanqiang
 * @Date: 2023-12-11 15:30:13
 * @LastEditors: yanqiang
 * @LastEditTime: 2023-12-11 15:44:16
 * @Description: 
 */


function maxDepth(root) {
    if(!root) return 0;
    let res = 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    res = Math.max(leftMaxDepth, rightMaxDepth) + 1
    return res;
}
function minDepth(root) {
    if(!root) return 0;
    let res = 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    res = Math.min(leftMaxDepth, rightMaxDepth) + 1
    return res;
}

const tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,

        },
        right: {
            value: 4,
        },
    },
    right: {
        value: 2,
        left: {
            value: 2,
            left: {
                value: 3,
                left: {
                    value: 2,
                    left: {
                        value: 3,
            
                    },
                    right: {
                        value: 4,
                    },
        
                },
                right: {
                    value: 4,
                },
    
            },
            right: {
                value: 4,
            },

        },
        right: {
            value: 4,
        },
    },
}

const res = maxDepth(tree);
const m = minDepth(tree);

console.log(m);