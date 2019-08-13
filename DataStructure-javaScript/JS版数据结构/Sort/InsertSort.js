/* 直接插入排序 */

var list = [5, 3, 4, 6, 2];

function InsertSort (l) {
  // 拷贝数组
  var len = l.length;
  var list = new Array(len);
  for (i = 0; i < len; i++) {
    list[i] = l[i];
  }

  // 排序
  var i, j;
  for (i = 1; i < len; i++) {
    if (list[i] < list[i - 1]) {
      var tmp = list[i];
      for (j = i - 1; list[j] > tmp; j--) {
        list[j + 1] = list[j];
      }
      list[j + 1] = tmp;
    }
  }
  return list;
}

// 直接插入排序
console.log(InsertSort(list));