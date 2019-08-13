/** 归并排序 */

var MAXSIZE = 9;

function Merge (SR, TR, i, m, n) {
  var j, k, l
  for (j = m + 1, k = i; i <= m && j <= n; k++) {
    if (SR[i] < SR[j]) {
      TR[k] = SR[i++];
    } else {
      TR[k] = SR[j++];
    }
  }
  if(i <= m) {
    for (l = 0; l <= m - i; l++) {
      TR[k+l] = SR[i+l];
    }
  }
  if(j <= n) {
    for (l = 0; l <= n - j; l++) {
      TR[k+l] = SR[j+l];
    }
  }
}

/**
 * 递归进行归并排序
 *
 * @param {*} SR  源数组 SR[s .. t]
 * @param {*} TR1 排序后的数组 TR1[s .. t]
 * @param {*} s   数组中开始排序的位置
 * @param {*} t   数组中排序结束的位置
 */
function MSort (SR, TR1, s, t) {
  var m,
      TR2 = new Array(MAXSIZE); // 将SR分两节排好序，存放在TR2中，再将TR2的两节利用Merge函数合并成一节放入TR1

  if (s == t) {
    TR1[s] = SR[s];
  } else {
    m = Math.floor((s + t) / 2);
    MSort(SR, TR2, s, m);
    MSort(SR, TR2, m+1, t); 
    Merge(TR2, TR1, s, m, t);
  }
}

function MergeSort (list) {
  MSort(list, list, 0, list.length - 1);
}

var list = [50, 10, 90, 30, 70, 40, 80, 60, 20];
console.log('归并排序前：', list);
MergeSort(list);
console.log('归并排序后：', list);