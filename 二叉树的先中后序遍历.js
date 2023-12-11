
// 递归实现
const preorder = (root) => {
    if(root === null) return;
    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}
const inorder = (root) => {
    if(root === null) return;
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}
const postorder = (root) => {
    if(root === null) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}
// 非递归实现

const lpreorder = (root) => {
    if(root === null) return;
    const stack = [root];
    while(stack.length) {
        const top = stack.pop();
        console.log(top.value);
        stack.push(top.right);
        stack.push(top.left);
    }
}

const linorder = (root) => {
    if(root === null) return;
    const stack = [];
    let p = root;
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        const top = stack.pop();
        console.log(top.value);
        p = top.right;
    }
    
}

const lpostorder = (root) => {
    if(root === null) return;
    const outputStack = [];
    const stack = [root];
    while(stack.length) {
       const n = stack.pop();
       outputStack.push(n)
       if(n.left) stack.push(n.left)
       if(n.right) stack.push(n.right)
    }
    while(outputStack.length) {
        const n = outputStack.pop();
        console.log(n.value)
    }
    
}