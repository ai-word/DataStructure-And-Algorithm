# DataStruct: Queue
# 队列应用:打印机之Printer类
# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/22

class Printer:
	def __init__(self,ppm):
		self.pageRate = ppm #初始化每分钟打印的页数
		self.currentTask = None #当前是否存在任务
		self.timeRemaining = 0 #记录当前任务的剩余处理时间

	#打印
	def printTick(self):
		#if self.currentTask != None:
		if self.isBusy(): #有任务需要处理
			self.timeRemaining = self.timeRemaining - 1#打印，也就是将剩余打印时间减一
			if self.timeRemaining <= 0: #当前任务打印结束
				self.currentTask = None
		else:#空闲
			pass

	def isBusy(self):
		return self.currentTask != None
		# if self.currentTask != None:
		# 	return True
		# else:
		# 	return False

	#载入新的任务
	def loadNext(self,newTask):
		self.currentTask = newTask
		self.timeRemaining = newTask.getPages() * 60/self.pageRate#计算新的剩余打印时间