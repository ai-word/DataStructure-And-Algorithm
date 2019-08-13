# DataStruct: Stack 
# 栈的应用:中缀转后缀通用法
#
# 算法思路：

# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/21

from Stack import Stack

def infixToPostfix(infixexpr):
	prec = {}
	prec["*"] = 3
	prec["/"] = 3
	prec["+"] = 2
	prec["-"] = 2
	prec["("] = 1
	opStack = Stack()
	postfixList = []
	tokenList = infixexpr.split()

	for token in tokenList:
		if token in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" or token in "0123456789":
			postfixList.append(token)
		elif token == '(':
			opStack.push(token)
		elif token == ')':
			topToken = opStack.pop()
			while topToken != '(':
				postfixList.append(topToken)
				topToken = opStack.pop()
		else:
			while (not opStack.isEmpty()) and \
				(prec[opStack.peek()] >= prec[token]):
					postfixList.append(opStack.pop())
			opStack.push(token)

	while not opStack.isEmpty():
		postfixList.append(opStack.pop())
	return " ".join(postfixList)

if __name__ == '__main__':
	print('  A * B + C * D          的后缀表达式:',infixToPostfix("1 * 2 + 3 * 4"))
	print('  ( A + B ) * ( C + D )  的后缀表达式:',infixToPostfix("( A + B ) * ( C + D )"))