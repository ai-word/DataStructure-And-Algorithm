# DataStruct: Stack 
# 栈的应用:括号匹配

# 算法思路：
# 每个开始符号被简单的压入栈中
# 等待匹配的结束符号出现。当出
# 现结束符号时，唯一的区别是我
# 们必须检查确保它正确匹配栈顶
# 部开始符号的类型。如果两个符
# 号不匹配，则字符串不匹配。如
# 果整个字符串都被处理完并且没
# 有什么留在栈中，则字符串匹配。
#
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
		if symbol in "([{":
			s.push(symbol)
			print('after push:',s.show())
		else:
			if s.isEmpty():
				balanced = False
			else:
				top = s.pop()
				print('after pop:',s.show())
				if not matches(top,symbol):#判断括号类型
					balanced = False
		index = index + 1

	if balanced and s.isEmpty():
		return True
	else:
		return False

def matches(open,close):
	opens = "([{"
	closers = ")]}"
	return opens.index(open) == closers.index(close)

print(parChecker('{{([)[])}()}'))
print(parChecker('{{([][])}()}'))