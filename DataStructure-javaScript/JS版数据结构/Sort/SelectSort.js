/* 简单选择排序 */

function swap (list, i, j) {
  var tmp = list[i];
  list[i] = list[j];
  list[j] = tmp;
}

var list = [9, 1, 5, 8, 3, 7, 4, 6, 2];

function SelectSort (l) {
  // 拷贝数组
  var len = l.length;
  var list = new Array(len);
  for (i = 0; i < len; i++) {
    list[i] = l[i];
  }

  // 排序
  var i, j;
  for (i = 0; i < len; i++) {
    var min = i;   // 将当前下标定义为最小值下标

    for (j = i + 1; j < len; j++) {
      if (list[j] < list[min]) {
        min = j;   // 更新最小值下标
      }
    }

    if (i != min) {// 检查当前是否是最小值
      swap(list, i, min); // 若不是，则将最小值交换到当前位置
    }
  }
  return list;
}

// 简单选择排序
console.log(SelectSort(list));