var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = new Map();
    }
    Graph.prototype.addVertex = function (vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    };
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        var _a, _b;
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
            (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push(vertex1);
        }
    };
    Graph.prototype.printGraph = function () {
        // @ts-ignore
        for (var _i = 0, _a = this.adjacencyList.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], vertex = _b[0], edges = _b[1];
            var edgeList = edges.join(", ");
            console.log(vertex + " -> [ " + edgeList + " ]");
        }
    };
    return Graph;
}());
var graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.printGraph();
