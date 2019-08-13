var Queue = require('../Queue/Queue');

var INFINITY = 65536; // 表示无穷大，用于有权边时的无边表示

/**
 * 邻接矩阵的广度遍历算法
 *
 * @param {*} G 用邻接矩阵描述的图
 */
function MGraphTraverse (G) {

  var queue = Queue();
  var visited = new Array(G.numVertexes);
  for (var i = 0; i < G.numVertexes; i++) {
    visited[i] = false;
  }

  console.log("There is BFS of the graph:");

  for (var i = 0; i < G.numVertexes; i++) {  // 对每个顶点做循环
    if (!visited[i]) {  // 若是未访问过就做处理
      visited[i] = true;
      console.log(G.vexs[i]);  // 打印遍历到的节点
      queue.push(i);           // 将此顶点入队

      while (!queue.isEmpty()) {
        var k = queue.remove();
        for (var j = 0; j < G.numVertexes; j++) {
          // 判断其他顶点是否与当前顶点存在边且未访问过
          if (G.arc[k][j] != INFINITY && !visited[j]) {
            visited[j] = true;
            console.log(G.vexs[j]);
            queue.push(j);
          }
        }
      }

    }
  }
}

/**
 * 邻接表的广度遍历算法
 *
 * @param {*} G 用邻接表描述的图
 */
function ALGraphTraverse (G) {

  var queue = Queue();
  var visited = new Array(G.numVertexes);
  for (var i = 0; i < G.numVertexes; i++) {
    visited[i] = false;
  }

  console.log("There is BFS of the graph:");

  for (var i = 0; i < G.numVertexes; i++) {  // 对每个顶点做循环
    if (!visited[i]) {  // 若是未访问过就做处理
      visited[i] = true;
      console.log(G.adjList[i].data);  // 打印遍历到的节点
      queue.push(i);           // 将此顶点入队

      while (!queue.isEmpty()) {
        var k = queue.remove();

        var p = G.adjList[k].firstedge;  // 找到当前顶点边表链表头指针
        while (p != null) {
          var tmp = p.next;

          if (!visited[p.adjvex]) { // 此顶点未被访问
            visited[p.adjvex] = true;
            console.log(G.adjList[p.adjvex].data);
            queue.push(p.adjvex);
          }

          p = tmp;
        }
      }

    }
  }
}

module.exports = {
  MGraphTraverse,
  ALGraphTraverse
}