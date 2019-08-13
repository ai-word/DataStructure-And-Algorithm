module.exports = function () {

  /** 初始化顺序栈 */
  var list = [];

  return {

    /**
     * 栈长度
     */
    length: function () {
      return list.length;
    },

    /**
     * 判断栈空
     */
    isEmpty: function () {
      return list.length ? false : true;
    },

    /** 
     * 清空栈 
     */
    clear: function () {
      list = [];
    },

    /**
     * 获取栈顶元素
     */
    getTop: function () {
      if (list.length > 0)
        return list[list.length - 1];
    },

    /** 
     * 入栈 
     */
    push: function (val) {
      list[list.length] = val;  
    },

    /** 
     * 出栈 
     */
    pop: function () {
      if (list.length <= 0) {
        return undefined;
      }
      var val = list[list.length - 1];
      list.length--;
      return val;
    },

    /**
     * 打印顺序栈
     */
    print () {
      console.log(list);
    }

  }
  
}