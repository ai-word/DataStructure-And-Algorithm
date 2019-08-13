module.exports = function () {

  /** 初始化链表 */
  var list = {
    header: null,
    length: 0
  };
  
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
      list.header = null;
      list.length = 0;
    },

    /**
     * 获取指定位置元素
     */
    get: function (index) {
      var p = list.header;
      for (var i = 0; i < list.length; i++) {
        if (i == index) {
          return p.val;
        }
        p = p.next;
      }
    },
    
    /**
     * 在指定位置插入元素
     * TODO: header附近的查找太过复杂，需简化
     */
    insert: function (index, val) {
      if (index > list.length || index < 0) {
        return false;
      }

      if (list.length == 0) {
        var node = {
          pre: null,
          next: null,
          val: val
        }
        list.header = node;
      } else {
        var i = 0;
        var p = list.header,
            pre = null;
        while (i < index) {
          pre = p;
          p = p.next;
          i++;
        }
        var node = {
          pre: pre,
          next: p,
          val: val
        }
        if (pre == null) {
          // 说明此时p是header
          list.header = node;
        } else {
          pre.next = node;
        }
      }
      list.length++;
    },

    /**
     * 删除指定位置的元素
     */
    delete: function (index) {
      if (index >= list.length || index < 0) {
        return undefined;
      }

      var p = list.header,
          pre = null;

      for (var i = 0; i < list.length; i++) {
        if (i == index) {
          break;
        }
        pre = p;
        p = p.next;
      }
      if (pre == null) {
        // 说明此时p是header
        list.header = p.next;
      } else {
        pre.next = p.next;
      }
      list.length--;
      return p.val;
    },

    /**
     * 打印链表
     */
    print: function () {
      var arr = [];
      var p = list.header;
      for (var i = 0; i < list.length; i++) {
        arr.push(p.val);
        p = p.next;
      }
      console.log(arr);
    }

  }

};