# DataStruct: Graph
# 图的实现之Vertex类
# 作用:表示图中的每个顶点
# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/26

import sys

class Vertex:
	def __init__(self,key):
		self.id = key
		self.connectedTo = {}
		self.color = 'white'
		self.dist = sys.maxsize
		self.pred = None #上级结点 
		self.disc = 0 #距离开始顶点的距离或者顶点标识为 gray 的时间
		self.fin = 0 # 顶点标识为 black 的时间

	#当前顶点连接到顶点nbr
	def addNeighbor(self,nbr,weight=0):
		self.connectedTo[nbr] = weight

	def setColor(self,color):
		self.color = color

	def setDistance(self,d):
		self.dist = d

	def setPred(self,p):
		self.pred = p

	def setDiscovery(self,dtime):
		self.disc = dtime

	def setFinish(self,ftime):
		self.fin = ftime

	def getFinish(self):
		return self.fin

	def __str__(self):
		return str(self.id) + ' connectedTo: ' + str([x.id for x in self.connectedTo])

	def getDiscovery(self):
		return self.disc

	def getPred(self):
		return self.pred

	def getDistance(self):
		return self.dist

	def getColor(self):
		return self.color 

	#返回所有顶点
	def getConnections(self):
		return self.connectedTo.keys()

	def getId(self):
		return self.id

	#该点到点nbr的权重
	def getWeight(self,nbr):
		return self.connectedTo[nbr]