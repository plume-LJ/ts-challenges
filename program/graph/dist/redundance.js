function redundance(grid) {
    var n = grid.length;
    var inDegree = new Array(n + 1).fill(0);
    var father = new Array(1001).fill(0);
    var result = [];
    function init() {
        for (var i = 0; i < n + 1; i++) {
            father[i] = i;
        }
    }
    function find(x) {
        if (x !== father[x]) {
            father[x] = find(father[x]);
        }
        return father[x];
    }
    function join(x, y) {
        var nx = find(x);
        var ny = find(y);
        if (nx === ny)
            return;
        father[ny] = nx;
    }
    function isSame(x, y) {
        var nx = find(x);
        var ny = find(y);
        return nx === ny;
    }
    function getRemoveEdge(edges) {
        init();
        for (var i = 0; i < n; i++) {
            if (isSame(edges[i][0], edges[i][1])) {
                result.push(edges[i][0] + " " + edges[i][1]);
                return;
            }
            else {
                join(edges[i][0], edges[i][1]);
            }
        }
    }
    function isTreeAfterRemoveEdge(edges, deleteEdge) {
        init();
        for (var i = 0; i < n; i++) {
            if (i === deleteEdge)
                continue;
            if (isSame(edges[i][0], edges[i][1])) {
                return false;
            }
            else {
                join(edges[i][0], edges[i][1]);
            }
        }
        return true;
    }
    var edges = [];
    for (var _i = 0, grid_1 = grid; _i < grid_1.length; _i++) {
        var _a = grid_1[_i], x = _a[0], y = _a[1];
        inDegree[y]++;
        edges.push([x, y]);
    }
    var vec = [];
    for (var i = n - 1; i >= 0; i--) {
        if (inDegree[edges[i][1]] === 2)
            vec.push(i);
    }
    if (vec.length > 0) {
        if (isTreeAfterRemoveEdge(edges, vec[0])) {
            console.log(edges[vec[0]][0], edges[vec[0]][1]);
        }
        else {
            console.log(edges[vec[1]][0], edges[vec[1]][1]);
        }
        return;
    }
    getRemoveEdge(edges);
}
console.log(redundance([
    [1, 2],
    [1, 3],
    [2, 3],
]));
console.log(redundance([
    [1, 3],
    [2, 1],
    [3, 2],
    [3, 4],
]));
