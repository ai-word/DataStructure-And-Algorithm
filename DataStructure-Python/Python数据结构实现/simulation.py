# DataStruct: Queue
# 队列应用:打印机之模拟类
# 模拟打印机打印任务
# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/22

from queue import Queue
from Printer import Printer
from task import Task
import random
#numSeconds为总的实验时间，pagesPerMinute为每分钟打印的页数
def simulation(numSeconds,pagesPerMinute):
	labPrinter = Printer(pagesPerMinute) #初始化打印机
	printQueue = Queue() #初始化任务等待队
	waitingTimes = [] #记录每个任务的等待时间

	for currentSecond in range(numSeconds):  #0~3600s
		if newPrintTask():  #创建新任务 
			task = Task(currentSecond)#当前任务及时间
			printQueue.enqueue(task)#进入打印队列
			#print('newPrintTask')

		if (not labPrinter.isBusy() ) and (not printQueue.isEmpty()):#打印机空闲并且有任务在等待
			nextTask = printQueue.dequeue()						   #弹出下一个任务
			waitingTimes.append(nextTask.waitTime(currentSecond))  #计算并记录等待时间
			labPrinter.loadNext(nextTask)						   #载入新的任务

		labPrinter.printTick()

	averageWait = sum(waitingTimes)/len(waitingTimes)
	print("Average Wait %6.2f secs %3d tasks remaining."%(averageWait,printQueue.size()))

#newPrintTask 决定是否创建一个新的打印任务
def newPrintTask():
	num = random.randrange(1,181)
	if num == 180:
		return True
	else:
		return False

for i in range(10):
	simulation(3600,5)	
# simulation(3600,5)