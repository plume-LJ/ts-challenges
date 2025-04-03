"use strict";
exports.__esModule = true;
var DisjointSet = /** @class */ (function () {
    function DisjointSet(size) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        this.count = size;
        for (var i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }
    DisjointSet.prototype.find = function (x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    };
    DisjointSet.prototype.union = function (x, y) {
        var rootX = this.find(x);
        var rootY = this.find(y);
        if (rootX === rootY) {
            return;
        }
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        }
        else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        }
        else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        this.count--;
    };
    DisjointSet.prototype.getConnectedComponents = function () {
        return this.count;
    };
    return DisjointSet;
}());
var d = new DisjointSet(5);
d.union(1, 2);
console.log(new DisjointSet(5));
console.log(d);
