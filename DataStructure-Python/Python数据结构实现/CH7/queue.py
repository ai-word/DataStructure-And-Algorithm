# DataStruct: Queue
# 队列的实现

# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/21

class Queue:
	def __init__(self):
		self.items = []

	def isEmpty(self):
		return self.items == []

	def enqueue(self,item):
		self.items.insert(0,item)

	def dequeue(self):
		return self.items.pop()

	def size(self):
		return len(self.items)

	def show(self):
		return self.items

if __name__ == '__main__':
	q = Queue()
	print(q.isEmpty())
	q.enqueue(8.4)
	print(q.isEmpty())
	q.enqueue(12)
	q.enqueue(13)
	print(q.show())
