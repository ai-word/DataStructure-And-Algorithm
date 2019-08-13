# DataStruct: Stack 
# 栈的应用，简单括号匹配

# 算法思路：
# 遇到左括号'(',则将左括号压入栈内,
# 遇到右括号')',则将栈内元素(左括号)弹出栈,
# 当遍历完栈后,最终判断栈是否为空栈,
# 是空栈则表示括号匹配成功,否则匹配不成功.

# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/21

from Stack import Stack

def parChecker(symbolString):
	s = Stack()
	balanced = True
	index = 0
	while index < len(symbolString) and balanced:
		symbol = symbolString[index]
		if symbol == "(":
			s.push(symbol)
			print('after push:',s.show())
		else:
			if s.isEmpty():
				balanced = False
			else:
				s.pop()
				print('after pop:',s.show())
		index = index + 1

	if balanced and s.isEmpty():
		return True
	else:
		return False

print('((())):',parChecker('((()))'))
print('((()):',parChecker('((())'))
print('()()():',parChecker('()()()'))
	