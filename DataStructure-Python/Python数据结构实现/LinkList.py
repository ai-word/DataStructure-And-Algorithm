#!/usr/bin/pyhton3
#-*- coding:utf-8 -*-
# DataStruct: Linklist 
# 线性表的链式存储
# Author:hugo
# email:hugooood@outlook.com
# Create Time:2017/4/13
# Last Modified Time:2017/4/17
import random

class Node(object):
	def __init__(self,value,point=0):
		self.value = value #值域
		self.next  = point#指针域

class LinkList(object):
	def __init__(self):
		#头指针
		self.head = 0

	def __getitem__(self,index):
		if self.is_empty():
			print("LinkList is empty.")
			return
		elif index < 0 or index > self.getlength():
			print("index error.")
			return
		else:
			return self.getitem(index)

	def __setitem__(self,index,value):
		if self.is_empty():
			print("LinkList is empty.")
			return
		elif index < 0 or index > self.getlength():
			print("index error.")
			return
		else:
			self.delete(index)
			return self.insert(index)

	def getlength(self):
		point = self.head
		length = 0
		while point!=0:
			length += 1
			point = point.next
		return length

	def is_empty(self):
		if self.getlength() == 0:
			return True
		else:
			return False

	#单链表的整表创建
	def createlist(self,count):
		self.head = Node(int(random.random()*100))
		point = self.head
		i = 1
		while i < count:
			node = Node(int(random.random()*100))
			point.next = node
			point = point.next
			i+=1
		return 


	def initlist(self,value):
		self.head = Node(value[0])
		
		point = self.head    #(type:class Node)

		for i in value[1:]:
			node = Node(i) #创建节点
			#-------------
			# Head-->Node       Head-->Node(data[i])-->Node(data[i+1])
			#  ^ 						^	    		^
			#  |						|				|
			# self.head               point  	    point.next
			#-------------
			point.next = node #链接节点 
			# print("self.head:",point.next.value)  
			point = point.next #(type:class Node)  游标指向下一个节点
			# print("self.head:",point.value)
		return

	def getvalue(self,index):
		if self.is_empty():
			print('LinkList is empty.')
			return
		j = 0
		point = self.head

		while point.next != 0 and j < index:
			point = point.next
			j += 1

		if j == index:
			return point.value
		else:
			print("Target is not exist!") 

	def insert(self,index,data):
		if self.is_empty() or index < 0 or index > self.getlength():
			print('LinkList is empty.')
			#return 

		#插入头部
		if index == 0:
			# print("self.head:",self.head.value)
			self.head = Node(data,self.head)
			# print("self.head:",self.head.value)
			return 
		
		#插入其他地方
		j = 0
		point = self.head
		node = self.head
		while j < index:
			point = point.next
			j+=1
		if index == j:
			#	print('ok')
			node = Node(data,point.next)
			point.next = node
		return '---Insert Sucessful---'


	def delete(self,index):
		if self.is_empty() or index < 0 or index > self.getlength():
			print('LinkList is empty.')		

		#删除头部
		if index == 0:
			self.head = self.head.next
			return '---Delete Sucessful---'

		j = 1
		point = self.head
		while j < index:
			point = point.next
			j+=1
		if index == j:
			point.next = point.next.next
			return '---Delete Sucessful---'

	def replace(self,index,value):
		if self.is_empty() or index < 0 or index > self.getlength():
			print('LinkList is empty.')	

		j = 0
		point = self.head
		while j < index:
			point = point.next
			j+=1
		if index == j:
			point.value = value
			return '---Replace Sucessful---'

	def show(self):

		point = self.head
		while point.value != 0:
			if point.next != 0:
				print (point.value,end=",")
				point = point.next
			elif point.next == 0:
				print (point.value,end=",")
				return '---------Show---------'
		return 

if __name__ == "__main__":
	l = LinkList()
	#l.createlist(4)
	#print(l.show())
	l.initlist([6,2,3,4])
	print(l.show())
	l.insert(0,5)
	print(l.show())
	l.delete(3)
	print(l.show())
	# print(l.replace(1,12))
	# print(l.show())	
