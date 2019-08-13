# DataStruct: Stack 
# 栈的应用:十进制任意基数转换
#
# 算法思路：

# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/21

from Stack import Stack 

def baseConverter(decNumber,base):
	digits = "0123456789ABCDEF" #模板转换作用，用于转换10->A 11->B ......

	remstack = Stack()
	while decNumber > 0:
		rem = decNumber % base
		remstack.push(rem)
		decNumber = decNumber//base
	
	newString = ""
	while not remstack.isEmpty():
		pop = remstack.pop()
		newString = newString + digits[pop] #作为渣渣，被惊艳到了
		print('pop',pop)
		print('newString',newString)

	return newString

print(baseConverter(42,16))