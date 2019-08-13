# DataStruct: Stack 
# 栈的应用:后缀四则运算
#
# 算法思路：

# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/21

from Stack import Stack

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
if __name__ == '__main__':
	print(postfixEval('7 8 + 3 2 + /'))