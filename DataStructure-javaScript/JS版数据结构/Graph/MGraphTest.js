/** 利用邻接矩阵建立无向图 */

var MGraph = require('./MGraph');

var graph = MGraph();

graph.init(4);

graph.insertVexs(['a', 'b', 'c', 'd']);

graph.addEdge(1, 0, 20);

graph.addEdge(2, 0, 10);

graph.addEdge(2, 1, 5);

graph.addEdge(3, 0, 50);

graph.addEdge(3, 2, 1);

graph.print();

graph.DFS();

graph.BFS();