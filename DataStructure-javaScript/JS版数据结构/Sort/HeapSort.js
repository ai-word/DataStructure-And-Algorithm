/** 堆排序 */

function swap (list, i, j) {
  var tmp = list[i];
  list[i] = list[j];
  list[j] = tmp;
}

/**
 * 堆调整（构建大顶堆）
 *
 * @param {*} list
 * @param {*} s 从此节点开始调整，调节它的子树及子树的子树
 * @param {*} m 最大调整序号
 */
function HeapAdjust (list, s, m) {
  var tmp, j;
  tmp = list[s];

  for (j = 2 * s + 1; j <= m; j = j * 2 + 1) {
    if (j < m && list[j] < list[j+1]) {
      ++j;
    }
    if (tmp >= list[j]) {
      break;
    }
    list[s] = list[j];
    s = j;
  }
  list[s] = tmp;
}

/**
 * 堆排序
 *
 * @param {*} list
 */
function HeapSort (list) {
  var i = 0,
      len = list.length;

  // 把顺序表构建为一个大顶堆
  for (i = Math.floor(len / 2) - 1; i >= 0; i--) {
    HeapAdjust(list, i, len - 1);
  }

  // 进行堆排序
  for (i = len - 1; i > 0; i--) {
    swap(list, 0, i);           // 将堆顶记录和当前未经排序子序列的最后一个记录交换
    HeapAdjust(list, 0, i - 1); // 将list[0 ... i-1]重新调整为大顶堆
  }

}

var list = [50, 10, 90, 30, 70, 40, 80, 60, 20];
console.log('堆排序前：', list);
HeapSort(list);
console.log('堆排序后：', list);