# DataStruct: Graph
# 图的应用之字梯图
# 作用:将字之间的关系表示为图
# Author:hugo
# email:hugooood@outlook.com
# Time:2017/4/26

from Graph import Graph

def buildGraph(wordFile):
	d = {}
	g = Graph()
	wfile = open(wordFile,'r')
	# print(wfile.read(100))#要读取的字符数
	for line in wfile:#每次取一个单词
		word = line[:-1] #line包含了一个回车字符，使用反向遍历把回车过滤后赋值给word

		for i in range(len(word)):
			#print(len(word))
			bucket = word[:i] + '_' + word[i+1:]#漂亮，每次遍历向后移动一下_号替换对应的字母
			print('bucket:',bucket)
			#print('d:',d)
			if bucket in d:#找到匹配的单词，进桶，注:桶是指字典里键相同的集合
				#print('bucket02:',bucket)
				#print('1.键:',bucket,'值:',d[bucket])
				d[bucket].append(word) #关键，实现匹配，同时也是字典一对多的关系。
				#print(d.keys())
				#print(d.values())
				#print('111',d['P_PE'])
				#print('------')
				#print('d:',d)
				#print('2.键:',bucket,'值:',d[bucket])

			else:
				d[bucket] = [word]
				# print('[word]:',[word])
				# print('d[bucket]:',d[bucket])
				#print('3.键:',bucket,'值:',d[bucket])
				#print('\n')
				# print('-----------')


	#建立联系转换成图
	for bucket in d.keys():
		for word1 in d[bucket]:
			for word2 in d[bucket]:
				if word1 != word2:
					g.addEdge(word1,word2)
	return g

if __name__ == '__main__':
	print(buildGraph('wordfile02.txt'))