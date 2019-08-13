/* 冒泡排序 */

function swap (list, i, j) {
  var tmp = list[i];
  list[i] = list[j];
  list[j] = tmp;
}

var list = [9, 1, 5, 8, 3, 7, 4, 6, 2];

function BubbleSort0 (l) {
  // 拷贝数组
  var len = l.length;
  var list = new Array(len);
  for (i = 0; i < len; i++) {
    list[i] = l[i];
  }

  // 排序
  var i, j;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (list[i] > list[j]) {
        swap(list, i, j);
      }
    }
  }
  return list;
}

function BubbleSort (l) {
  // 拷贝数组
  var len = l.length;
  var list = new Array(len);
  for (i = 0; i < len; i++) {
    list[i] = l[i];
  }

  // 排序
  var i, j;
  for (i = 0; i < len; i++) {
    for (j = len - 1; j >= i; j--) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
      }
    }
  }
  return list;
}

// 初级版
console.log(BubbleSort0(list));

// 真正的冒泡排序
console.log(BubbleSort(list));