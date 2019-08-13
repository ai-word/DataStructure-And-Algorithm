# DataStruct: Graph
# 图的实现之Graph类
# 作用:保存顶点的主列表
# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/26

from Vertex import Vertex

class Graph:
	def __init__(self):
		self.vertList = {}
		self.numVertices = 0 #顶点数

	def getElement(self,key):
		return self.vertList[key]

	#添加顶点
	def addVertex(self,key):
		self.numVertices = self.numVertices + 1
		newVertex = Vertex(key)
		self.vertList[key] = newVertex
		return newVertex

	#相连结点
	def getVertex(self,n):
		if n in self.vertList:
			return self.vertList[n]
		else:
			return None

	def __contains__(self,n):
		return n in self.vertList

	#    f ---> t
	def addEdge(self,f,t,cost=0):
		#主列表不存在则创建该顶点
		if f not in self.vertList:
			nv = self.addVertex(f)  
		if t not in self.vertList:
			nv = self.addVertex(t)
		self.vertList[f].addNeighbor(self.vertList[t],cost)

	def getVertices(self):
		return self.vertList.keys()

	def __iter__(self):
		return iter(self.vertList.values())

if __name__ == '__main__':
	g = Graph()
	#创建了顶点的实例s
	for i in range(6):
		g.addVertex(i)
	print(g.vertList)
	#添加将顶点连接在一起的边
	g.addEdge(0,1,5)
	g.addEdge(0,5,2)
	g.addEdge(1,2,4)
	g.addEdge(2,3,9)
	g.addEdge(3,4,7)
	g.addEdge(3,5,3)
	g.addEdge(4,0,1)
	g.addEdge(5,4,8)
	g.addEdge(5,2,1)
	print(g.vertList)
	#嵌套循环验证图中的每个边缘是否正确存储
	for v in g:
		for w in v.getConnections():
			print("(%s,%s)" % (v.getId(),w.getId()))
