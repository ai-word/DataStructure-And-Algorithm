/** 四则运算 */

var SqStack = require('./SqStack');

var str = '9+(3-1)*3+10/2';
// var str = '(10+2)+(2+3)*5';

var arr = str2Arr(str);        // 1. 中缀表达式字符串转中缀表达式数组

var suffix = mid2suf(arr);     // 2. 中缀表达式转后缀表达式

var rst = calBySuf(suffix);    // 3. 利用后缀表达式进行四则运算

console.log(rst); // 运算结果


/** *************************************************************** */


/**
 * 中缀表达式字符串转中缀表达式数组
 *
 * @param {*} str 中缀表达式字符串
 * 
 * @return arr 中缀表达式数组
 */
function str2Arr (str) {
  var arr = []
  var cnt = 0;
  
  for (var k = 0; k < str.length; k++) {
    if (isNaN(str[k])) {
      arr.push(str[k])
      cnt++
    } else {
      if(!isNaN(arr[cnt-1])) {
        arr[cnt-1] = arr[cnt-1] * 10 + parseInt(str[k])
      } else {
        arr.push(parseInt(str[k]))
        cnt++
      }
    }
  }
  
  return arr;
}


/**
 * 中缀表达式转后缀表达式
 *
 * @param {*} midArr 中缀表达式数组
 * 
 * @return arr 后缀表达式数组
 * 
 * NOTE: 若为数字, 直接输出
 *       若为符号, 1. 左括号，直接入栈
 *                 2. 右括号，将左括号前的符号出栈并输出，两个括号丢掉
 *                 3. +-*÷, 观察栈顶: a.空栈、栈顶为左括号、栈顶(+-)优先级低于新符号(*÷)，直接入栈
 *                                    b. 出栈并输出，直到栈顶(*÷或+-*÷)优先级不低于新符号(*÷或+-)，或直到栈空，然后将新符号入栈
 *       最后将栈中剩余的符号全部出栈并输出
 */
function mid2suf (midArr) {
  var str = midArr
  var suffixStr = []

  var symbolStack = SqStack();  // 符号栈，用于生成中缀表达式

  for (var i = 0; i < str.length; i++) {
    if(!isNaN(str[i])) {
      // 若为数字，直接输出
      suffixStr.push(str[i])
    } else {
      if (str[i] == '(') {
        // 若为左括号，直接入栈
        symbolStack.push('(')
      } 
      else if (str[i] == ')') {
        // 若为右括号，则一直出栈，直到左括号为止
        while (!symbolStack.isEmpty()) {
          var symbol = symbolStack.pop()
          if (symbol != '(') {
            suffixStr.push(symbol)
          } else {
            break;
          }
        }
      } else {
        // 若为+-*/
        while (!symbolStack.isEmpty()) {
          var symbol = symbolStack.getTop(); // 获得栈顶元素
          if (symbol == '(') {
            break;
          } else if ((str[i] == '+' || str[i] == '-')
              || (symbol == '*' || symbol == '/')
          ) {
            suffixStr.push(symbolStack.pop()); // 出栈并输出
          } else {
            break;
          }
        }
        symbolStack.push(str[i]) // 新符号入栈
      }
    }
  }

  // 将符号栈里剩余的符号弹出，并输出
  while (!symbolStack.isEmpty()) {
    suffixStr.push(symbolStack.pop())
  }

  return suffixStr;
}


/**
 * 利用后缀表达式进行四则运算
 *
 * @param {*} sufArr 后缀表达式数组
 * 
 * @return rst 计算结果
 */
function calBySuf (sufArr) {
  var suffixStr = sufArr;
  var numStack = SqStack(); // 数字栈，用于利用后缀表达式进行四则运算

  for (var j = 0; j < suffixStr.length; j++) {
    if (!isNaN(suffixStr[j])) {
      // 若为数字
      numStack.push(suffixStr[j])
    } else {
      var num2 = numStack.pop()
      var num1 = numStack.pop()
      var rst = 0;
      switch (suffixStr[j]) {
        case '+' : rst = num1 + num2; break;
        case '-' : rst = num1 - num2; break; 
        case '*' : rst = num1 * num2; break; 
        case '/' : rst = num1 / num2; break; 
      }
      numStack.push(rst)
    }
  }

  return numStack.pop()
}