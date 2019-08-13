/** 邻接矩阵 */

var DFS = require('./DFS');
var BFS = require('./BFS');

var INFINITY = 65536; // 表示无穷大，用于有权边时的无边表示

module.exports = function () {

  /** 初始化图 */
  var graph = {
    vexs: [],       // 顶点表
    arc: [],        // 邻接矩阵，可看做边表
    numVertexes: 0, // 顶点数
    numEdges: 0,    // 边数
  };

  return {

    /**
     * 初始化利用邻接矩阵定义的图
     *
     * @param numVertexes 顶点数
     */
    init: function (numVertexes) {
      graph.numVertexes = numVertexes;

      // 初始化顶点表
      graph.vexs = new Array(numVertexes);
      // 初始化邻接矩阵
      graph.arc = new Array(numVertexes);
      for (var i = 0; i < numVertexes; i++) {
        graph.arc[i] = new Array(numVertexes);
        for (var j = 0; j < numVertexes; j++) {
          graph.arc[i][j] = INFINITY;
        }
      }

      return true;
    },

    /**
     * 传入顶点列表
     *
     * @param vexs 顶点列表
     */
    insertVexs: function (vexs) {
      if (vexs.length != graph.numVertexes) {
        console.log('please pass the correct size of vex arr : ', graph.numVertexes, '(not ', vexs.length, ' )');
        return;
      }

      graph.vexs = vexs;
    },

    /**
     * 添加边(i, j) & (j, i)
     *
     * @param w 边的权重
     */
    addEdge: function (i, j, w) {
      if (i >= graph.numVertexes || j >= graph.numVertexes) {
        console.log('the vex index you pass does not exist');
        return;
      }

      if (i == j) {
        console.log('you should not add a edge from i to i');
        return;
      }

      graph.arc[i][j] = w;
      graph.arc[j][i] = w;

      graph.numEdges++;
    },

    /** 深度优先遍历 */
    DFS: function () {
      DFS.MGraphTraverse(graph);
    },

    /** 广度优先遍历 */
    BFS: function () {
      BFS.MGraphTraverse(graph);
    },

    print: function () {
      console.log("vexs:");
      console.log('  ', graph.vexs);
      console.log('edges:')
      for (var i = 0; i < graph.numVertexes; i++) {
        console.log('  ', graph.arc[i]);
      }
    }
  
  }
  
}