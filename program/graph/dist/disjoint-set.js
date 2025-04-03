"use strict";
exports.__esModule = true;
exports.DisjointSet = exports.DisjointSetWithRank = void 0;
var DisjointSetWithRank = /** @class */ (function () {
    function DisjointSetWithRank(size) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        this.count = size;
        for (var i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }
    DisjointSetWithRank.prototype.find = function (x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    };
    DisjointSetWithRank.prototype.union = function (x, y) {
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
    DisjointSetWithRank.prototype.getConnectedComponents = function () {
        return this.count;
    };
    return DisjointSetWithRank;
}());
exports.DisjointSetWithRank = DisjointSetWithRank;
var DisjointSet = /** @class */ (function () {
    function DisjointSet(size) {
        this.parent = new Array(size);
        this.count = size;
        for (var i = 0; i < size; i++) {
            this.parent[i] = i;
        }
    }
    DisjointSet.prototype.find = function (x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    };
    DisjointSet.prototype.isSame = function (x, y) {
        return this.find(x) === this.find(y);
    };
    DisjointSet.prototype.union = function (x, y) {
        var rootX = this.find(x);
        var rootY = this.find(y);
        if (rootX === rootY)
            return;
        this.parent[rootY] = rootX;
        this.count--;
    };
    DisjointSet.prototype.getConnectedComponents = function () {
        return this.count;
    };
    return DisjointSet;
}());
exports.DisjointSet = DisjointSet;
// let d = new DisjointSetWithRank(5);
// d.union(1, 2);
// d.union(3, 4);
// d.union(1, 4);
// const c = new DisjointSet(5);
// c.union(1, 2);
// c.union(3, 4);
// console.log(c);
// console.log(d);
