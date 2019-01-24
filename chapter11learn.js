//图  图由边的集合及顶点的集合组成  树由一组以边连接的节点组成
/**
 *  如果一个图的顶点对是有序的，则可以称之为有向图。在对有向图中的顶点对排序后，便可以在两
   个顶点之间绘制一个箭头。有向图表明了顶点的流向
   如果图是无序的，则称之为无序图
 */
/**
 * 图中的一系列顶点构成路径，路径中所有的顶点都由边连接。路径的长度用路径中第一个
顶点到最后一个顶点之间边的数量表示。由指向自身的顶点组成的路径称为环，环的长度
为 0。
圈是至少有一条边的路径，且路径的第一个顶点和最后一个顶点相同。无论是有向图还是
无向图，只要是没有重复边或重复顶点的圈，就是一个简单圈。除了第一个和最后一个顶
点以外，路径的其他顶点有重复的圈称为平凡圈。
如果两个顶点之间有路径，那么这两个顶点就是强连通的，反之亦然。如果有向图的所有
的顶点都是强连通的，那么这个有向图也是强连通的。
 *
 */

//图的顶点
function Vertex(lable) {
    this.lable = lable//我们将所有顶点保存到数组中，在图类里，可以通过它们在数组中的位置引用它们。
}
function Graph(v) {
    this.vertices = v;
    this.edges = 0
    this.adj = []
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = []
        this.adj[i].push("")
    }
    this.addEdge = addEdge
    this.showGraph = showGraph
}
function addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
}
function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + " -> ")
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }
    }
}
//测试代码
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph()
/**
 *   以上输出显示，顶点 0 有到顶点 1 和顶点 2 的边；顶点 1 有到顶点 0 和顶点 3 的边；顶
     点 2 有到顶点 0 和 4 的边；顶点 3 有到顶点 1 的边；顶点 4 有到顶点 2 的边。当然，这种
     显示存在冗余，例如，顶点 0 和 1 之间的边和顶点 1 到 0 之间的边相同
 * 
 */

 //未完待续........