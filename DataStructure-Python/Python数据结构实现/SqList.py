#!/usr/bin/pyhton3
#-*- coding:utf-8 -*-
# DataStruct: Sequence list 
# 线性表的顺序存储
# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/12

MAXSIZE = 20

class SqList(object):
	def __init__(self):
		self.items = []
		self.length = MAXSIZE



	def IsEmpty(self):
		return self.items == []

	def ClearList(self):
		self.items = []
		return True 

	#不是很对劲
	def GetElem(self,index,value=None):
		if self.IsEmpty():
			return "Error:The SqList is empty." 
		elif index < 0 | index > self.length-1:
			return "Error:List index out of range."
		else:
			value = self.items[index-1]
			return value  

	def LocateElem(self,value):
		if value in self.items:
			return True
		else:
			return False

	def ListInsert(self,index,value):
		if len(self.items) == MAXSIZE:
			return False
		if index < 0 | index > self.length-1:
			return False
		if index <= self.length-1:
			self.items.insert(index,value)
			#print(self.length)
			return True

	def ListDelete(self,index,value=None):
		value = self.items[index]
		del self.items[index]
		return value

	def ListLength(self,length=None):
		length = len(self.items)
		return length

	def show(self):
#		for i in self.items:
#			print(i)
		return self.items

	#并集操作
	def Union(self,Lb):
		La_Len = self.ListLength()
		Lb_Len = Lb.ListLength(Lb)
		# print(self.ListLength())
		# print(Lb_Len)
		count = 1
		element = None
		while count <= Lb_Len:
			element = Lb.GetElem(count,element)
			#print(element)
			if Lb.GetElem(count) not in self.items:
				self.ListInsert(La_Len,element)
				La_Len+=1
			count+=1

if __name__ == "__main__":
	s1 = SqList()
	s2 = SqList()
	#u1 = SqList()
	#u1.ListInsert(1,1)
	# print(s.GetElem(1))
	count1 = 0
	count2 = 3
	while count1 < 5:
		s1.ListInsert(count1,count1)
		count1+=1
	while count2 < 9:
		s2.ListInsert(count2,count2)
		count2+=1

	print('La:',s1.show())
	print('Lb:',s2.show())
	# print(u1.show())
	s1.Union(s2)
	# print(s1.ListLength())
	print('union:',s1.show())
	# print(s.length)
	# print(s.GetElem(20))

