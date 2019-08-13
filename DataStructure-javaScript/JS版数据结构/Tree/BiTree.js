function CreateNode () {
  return {
    val: undefined,
    lchild: null,
    rchild: null
  }
}

module.exports = function () {

  var cnt_pre  = 0,  // 前序遍历法建立二叉树的数组序号
      cnt_in   = 0,  // 中序遍历法建立二叉树的数组序号
      cnt_post = 0;  // 后序遍历法建立二叉树的数组序号


  return {

    /** 前序遍历法建立二叉树 */
    PreOrderCreate: function (arr) {
      var t = null;
      
      if (cnt_pre >= arr.length || arr[cnt_pre] == '#') {
        cnt_pre++;
      } else {
        t = CreateNode();
        t.val = arr[cnt_pre];
        cnt_pre++;
      
        t.lchild = arguments.callee(arr);
        t.rchild = arguments.callee(arr);
      }

      return t;
    },

    /** 前序遍历 */
    PreOrderTraverse: function (tree) {
      if (tree == null) {
        return;
      }

      console.log(tree.val)
      arguments.callee(tree.lchild);
      arguments.callee(tree.rchild);
    }

  }
  
}