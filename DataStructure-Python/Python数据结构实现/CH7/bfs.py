# DataStruct: Graph
# 图的应用之广度优先搜索（bfs）
# 作用:查找字梯图的最短路径
# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/27


from Graph import Graph
from Vertex import Vertex
from queue import Queue

def buildGraph(wordFile):
	d = {}
	g = Graph()
	wfile = open(wordFile,'r')

	for line in wfile:
		word = line[:-1]

		for i in range(len(word)):
			bucket = word[:i] + '_' + word[i+1:]
			if bucket in d:
				d[bucket].append(word)
			else:
				d[bucket] = [word]

	for bucket in d.keys():
		for word1 in d[bucket]:
			for word2 in d[bucket]:
				if word1 != word2:
					g.addEdge(word1,word2)
	return g

def bfs(start):
	#start是Vertex类型
	start.setDistance(0)
	print('路径长度1:',start.getDistance())
	print('node')
	start.setPred(None)
	vertQueue = Queue()
	print('队列是否为空1:',vertQueue.isEmpty())
	vertQueue.enqueue(start)
	print('队列是否为空2:',vertQueue.isEmpty())
	while (vertQueue.size() > 0):
		currentVert = vertQueue.dequeue() #出队
		print('队列是否为空3:',vertQueue.isEmpty())
		for nbr in currentVert.getConnections():
			if (nbr.getColor() == "white"):
				nbr.setColor('gray')
				nbr.setDistance(currentVert.getDistance() + 1)
				print('路径长度2:',nbr.getDistance())
				nbr.setPred(currentVert)
				print('当前结点Key:',nbr.getId())
				print('上级结点:',nbr.getPred())
				vertQueue.enqueue(nbr)
			currentVert.setColor('black')		

def traverse(y): #反向追踪找到路径
	x = y
	while (x.getPred()):
		print(x.getId())
		x = x.getPred()
	print(x.getId())

#traverse(g.getVertex('sage'))
if __name__ == '__main__':
	
	g = buildGraph('wordFile03.txt')
	#print(g.vertList)

	#嵌套循环验证图中的每个边缘是否正确存储
	# for v in g:
	# 	for w in v.getConnections():
	# 		print("(%s,%s)" % (v.getId(),w.getId()))


	print(bfs(g.getVertex('fool')))
	#traverse(g.getVertex('fool'))
	#y = bfs(g['pool'])
	#traverse(y)