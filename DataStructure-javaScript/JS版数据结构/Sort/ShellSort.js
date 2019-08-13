/* 希尔排序 */

var list = [9, 1, 5, 8, 3, 7, 4, 6, 2];

function ShellSort (l) {
  // 拷贝数组
  var len = l.length;
  var list = new Array(len);
  for (i = 0; i < len; i++) {
    list[i] = l[i];
  }

  // 排序
  var i, j;
  var increment  = len;
  do {
    increment = Math.floor(increment / 3) + 1;
    for (i = increment; i < len; i++) {
      if (list[i] < list[i - increment]) {
        var tmp = list[i];
        for (j = i - increment; j >= 0 && tmp < list[j]; j -= increment) {
          list[j + increment] = list[j];
        }
        list[j + increment] = tmp;
      }
    }
  } while (increment > 1);
  return list;
}

// 希尔排序
console.log(ShellSort(list));