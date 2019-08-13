/** 邻接表 */

var DFS = require('./DFS');
var BFS = require('./BFS');

/**
 * 创建一个边表结点
 *
 * @param {*} adjvex 邻接点域，存储该顶点对应的下标
 * @param {*} weight 权值
 */
function CreateEdgeNode (adjvex, weight) {
  return {
    adjvex: adjvex,
    weight: weight,
    next: null,     // 指向下一个邻接点
  }
}

/**
 * 创建一个顶点表结点
 *
 * @param {*} data 顶点域
 */
function CreateVertexNode (data) {
  return {
    data: data,
    firstedge: null, // 指向边表头指针，即第一个邻接点
  }
}

module.exports = function () {

  /** 初始化图 */
  var graph = {
    adjList: [],    // 顶点表
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
      graph.adjList = new Array(numVertexes);

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

      for (var i = 0; i < graph.numVertexes; i++) {
        graph.adjList[i] = new CreateVertexNode(vexs[i]);
      }
    },

    /**
     * 添加边(i, j) & (j, i) - 无向图、头插法
     *
     * @param i、j 顶点序号
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

      // graph.arc[i][j] = w;
      // graph.arc[j][i] = w;
      var edgeNodeJ = new CreateEdgeNode(j, w);
      edgeNodeJ.next = graph.adjList[i].firstedge;
      graph.adjList[i].firstedge = edgeNodeJ;

      var edgeNodeI = new CreateEdgeNode(i, w);
      edgeNodeI.next = graph.adjList[j].firstedge;
      graph.adjList[j].firstedge = edgeNodeI;

      graph.numEdges++;
    },

    /** 深度优先遍历 */
    DFS: function () {
      DFS.ALGraphTraverse(graph);
    },

    /** 广度优先遍历 */
    BFS: function () {
      BFS.ALGraphTraverse(graph);
    },

    print: function () {
      for (var i in graph.adjList) {
        var adj = graph.adjList[i];
        var str = i + '. ';
        str += adj.data;

        var next = adj.firstedge
        while (next != null) {
          str += ' -> ' + graph.adjList[next.adjvex].data;
          next = next.next;
        }

        console.log(str);
      }
    }
  
  }
  
}