# DataStruct: Stack 
# 栈的应用:十进制转二进制
#
# 算法思路：

# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/21

from Stack import Stack 

def divideBy2(decNumber):
	remstack = Stack()
	while decNumber > 0:
		rem = decNumber % 2
		remstack.push(rem)
		decNumber = decNumber//2
	
	binString = ""
	while not remstack.isEmpty():
		binString = binString + str(remstack.pop())

	return binString

print(divideBy2(42))