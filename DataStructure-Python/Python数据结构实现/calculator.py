# DataStruct: Stack 
# 栈的应用:简单的计算器
# 个位数四则运算

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

def postfixEval(postfixExpr):
	operandStack = Stack()
	tokenList = postfixExpr.split()

	for token in tokenList:
		if token in "0123456789":
			operandStack.push(int(token))
		else:
			operand2 = operandStack.pop()
			operand1 = operandStack.pop()
			result = doMath(token,operand1,operand2)
			operandStack.push(result)
	return operandStack.pop()

def doMath(op,op1,op2):
	if op == "*":
		return op1 * op2
	elif op == "/":
		return op1 / op2
	elif op == "+":
		return op1 + op2
	else:
		return op1 - op2

if __name__ == "__main__":
	#输入样例：1 * 2 + 3 * 4
	result = input("Please input the equation！\n")
	print(postfixEval(infixToPostfix(result)))