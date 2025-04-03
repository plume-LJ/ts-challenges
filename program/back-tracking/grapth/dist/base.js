"use strict";
exports.__esModule = true;
function dfs(graph, start, visited) {
    visited.add(start);
    console.log(start);
    for (var _i = 0, _a = graph[start]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}
var graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: [],
    D: [],
    E: []
};
var visited = new Set();
dfs(graph, "A", visited);
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.enqueue = function () {
        var _a;
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, item);
    };
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    return Queue;
}());
function bfs(graph, start) {
    var visited = new Set();
    var queue = new Queue();
    queue.enqueue(start);
    while (!queue.isEmpty()) {
        var node = queue.dequeue();
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node);
            queue.enqueue.apply(queue, graph[node]);
        }
    }
}
var graph1 = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: [],
    D: [],
    E: []
};
bfs(graph1, "A");
