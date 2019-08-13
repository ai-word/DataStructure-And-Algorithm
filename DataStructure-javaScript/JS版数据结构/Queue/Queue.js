module.exports = function () {

  /** 初始化队列 */
  var list = [];

  return {

    /**
     * 队列长度
     */
    length: function () {
      return list.length;
    },

    /**
     * 判断队空
     */
    isEmpty: function () {
      return list.length ? false : true;
    },

    /** 
     * 清空队列 
     */
    clear: function () {
      list = [];
    },

    /**
     * 获取队头元素
     */
    getTop: function () {
      if (list.length > 0)
        return list[0];
    },

    /** 
     * 入队，即插入到队尾 
     */
    push: function (val) {
      list.push(val);
    },

    /** 
     * 出队，即取出队头元素
     */
    remove: function () {
      if (list.length <= 0) {
        return undefined;
      }
      return list.shift();
    },

    /**
     * 打印队列
     */
    print () {
      console.log(list);
    }

  }
  
}