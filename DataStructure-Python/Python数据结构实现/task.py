# DataStruct: Queue
# 队列应用:打印机之Task类
# 表示单个打印任务
# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/21

import random

class Task:
	def __init__(self,time):
		self.timestamp = time  # time 为传入的任务创建时间，也就是入队时间
		self.pages = random.randrange(1,21) #随机生成每个任务包含的页数

	def getStamp(self): #返回任务创建时间
		return self.timestamp 

	def getPages(self):	#返回任务需要打印的页数
		return self.pages

	def waitTime(self,currenttime):
		return currenttime - self.timestamp