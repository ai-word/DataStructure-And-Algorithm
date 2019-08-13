# DataStruct: Queue
# 队列应用:烫手山芋

# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/21

from queue import Queue
def hotPotato(namelist,num):
	simqueue = Queue()
	for name in namelist:
		simqueue.enqueue(name)
		#print(simqueue.show())
	print('--------------')
	while simqueue.size() > 1:
		for i in range(num):
			simqueue.enqueue(simqueue.dequeue())
			#print(simqueue.show())
		simqueue.dequeue()
	return simqueue.dequeue()

print(hotPotato(["Bill","David","Susan","Jane","Kent","Brad"],7))