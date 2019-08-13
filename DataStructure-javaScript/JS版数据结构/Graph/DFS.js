/** 深度优先遍历 */

var INFINITY = 65536; // 表示无穷大，用于有权边时的无边表示

var MVisited = [],
    ALVisited = [];

/**
 * 邻接矩阵的深度优先递归算法
 *
 * @param {*} G 用邻接矩阵描述的图
 * @param {*} i 顶点下标
 */
function MGraphDFS (G, i) {
  console.log(G.vexs[i]);
  MVisited[i] = true;
  for (var j = 0; j < G.numVertexes; j++) {
    if (G.arc[i][j] != INFINITY && !MVisited[j]) {
      MGraphDFS(G, j);
    }
  }
}

/**
 * 邻接矩阵的深度遍历操作
 *
 * @param {*} G 用邻接矩阵描述的图
 */
function MGraphTraverse (G) {
  MVisited = new Array(G.numVertexes);
  for (var i = 0; i < G.numVertexes; i++) {
    MVisited[i] = false;  // 初始化所有顶点都是未访问过的状态
  }

  console.log("There is DFS of the graph:");
  for (var i = 0; i < G.numVertexes; i++) {
    if (!MVisited[i]) {   // 对未访问过的顶点调用 DFS
      MGraphDFS(G, i);
    }
  }
}


/**
 * 邻接表的深度优先递归算法
 *
 * @param {*} G 用邻接表描述的图
 * @param {*} i 顶点下标
 */
function ALGraphDFS (G, i) {
  console.log(G.adjList[i].data);
  ALVisited[i] = true;

  p = G.adjList[i].firstedge;
  while (p != null) {
    var tmp = p.next;

    if(!ALVisited[p.adjvex]) {
      ALGraphDFS(G, p.adjvex);
    }

    p = tmp;  // p是引用类型，上面传入ALGraphDFS后会被修改，此处只好使用临时变量。应采取更好的办法解决。
  }
}

/**
 * 邻接表的深度遍历操作
 *
 * @param {*} G 用邻接表描述的图
 */
function ALGraphTraverse (G) {
  ALVisited = new Array(G.numVertexes);
  for (var i = 0; i < G.numVertexes; i++) {
    ALVisited[i] = false;  // 初始化所有顶点都是未访问过的状态
  }

  console.log("There is DFS of the graph:");
  for (var i = 0; i < G.numVertexes; i++) {
    if (!ALVisited[i]) {   // 对未访问过的顶点调用 DFS
      ALGraphDFS(G, i);
    }
  }
}

module.exports = {
  MGraphTraverse,
  ALGraphTraverse
}