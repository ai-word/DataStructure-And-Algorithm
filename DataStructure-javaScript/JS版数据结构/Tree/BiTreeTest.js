var BiTree = require('./BiTree');
var Tree = BiTree();

console.log('1. 前序遍历法建立二叉树');

// 利用前序遍历法建立二叉树
var str_pre = 'ABD##E##CF###';
t = Tree.PreOrderCreate(str_pre)
console.log(t)

console.log('前序遍历: ');
// 前序遍历
Tree.PreOrderTraverse(t)

