module.exports = function () {

  /** 初始化顺序表 */
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
     * 获取指定位置元素
     */
    get: function (index) {
      return list[index];
    },

    /**
     * 在指定位置插入元素
     */
    insert: function (index, val) {
      var length = list.length;

      if (index >= length) {
        length = index + 1;
      } else {
        for (var i = length; i > index; i--) {
          list[i] = list[i-1];
        }
        length++;
      }

      list.length = length;
      list[index] = val;
    },

    /**
     * 删除指定位置的元素
     */
    delete: function (index) {
      if (index < 0 || index > list.length - 1) {
        return;
      }

      var val = list[index];
      for (var i = index; i < list.length; i++) {
        list[i] = list[i+1];
      }
      list.length--;
      return val;
    },

    /**
     * 查找某个元素在顺序表中第一次出现的位置, 否则返回-1
     */
    findFirst: function (val) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] == val) {
          return i;
        }
      }
      return -1;
    },

    /**
     * 查找某个元素在顺序表中最后一次出现的位置, 否则返回-1
     */
    findLast: function (val) {
      for (var i = list.length - 1; i > -1; i--) {
        if (list[i] == val) {
          return i;
        }
      }
      return -1;
    },

    /**
     * 查找某个元素在顺序表中出现的所有位置
     */
    find: function (val) {
      var location = [];
      for (var i = 0; i < list.length; i++) {
        if (list[i] == val) {
          location.push(i);
        }
      }
      return location;
    },

    /**
     * 打印顺序表
     */
    print () {
      console.log(list);
    }

  }

};