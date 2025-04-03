function dfs(graph, key, visited) {
    var _a;
    if (visited.get(key))
        return;
    visited.set(key, true);
    for (var _i = 0, _b = (_a = graph.get(key)) !== null && _a !== void 0 ? _a : []; _i < _b.length; _i++) {
        var next = _b[_i];
        dfs(graph, next, visited);
    }
}
function dfs1(graph, key, visited) {
    var _a;
    visited[key] = true;
    var keys = (_a = graph.get(key)) !== null && _a !== void 0 ? _a : [];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key_1 = keys_1[_i];
        if (visited[key_1] === false) {
            visited[key_1] = true;
            dfs1(graph, key_1, visited);
        }
    }
}
function access(data) {
    var graph = new Map();
    var visited = new Map();
    var visited1 = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var _a = data_1[_i], a = _a[0], b = _a[1];
        if (!graph.has(a))
            graph.set(a, []);
        graph.get(a).push(b);
        visited.set(a, false);
        visited1[a] = false;
    }
    visited1[0] = true;
    dfs(graph, 1, visited);
    dfs1(graph, 1, visited1);
    // console.log(visited, visited1);
    var result = [];
    for (var _b = 0, visited_1 = visited; _b < visited_1.length; _b++) {
        var _c = visited_1[_b], _ = _c[0], value = _c[1];
        if (value === false) {
            result.push(false);
            break;
        }
    }
    if (result.length === 0) {
        result.push(true);
    }
    for (var _d = 0, visited1_1 = visited1; _d < visited1_1.length; _d++) {
        var value = visited1_1[_d];
        if (value === false) {
            result.push(false);
            break;
        }
    }
    if (result.length === 1) {
        result.push(true);
    }
    // console.log(visited);
    return result;
}
function accessBfs(data) {
    var _a;
    var visited = Array.from({ length: data.length + 1 }, function () { return false; });
    visited[1] = true;
    var graph = new Map();
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var _b = data_2[_i], a = _b[0], b = _b[1];
        if (!graph.has(a))
            graph.set(a, []);
        graph.get(a).push(b);
    }
    var queue = [1];
    while (queue.length) {
        var key = queue.shift();
        var keys = (_a = graph.get(key)) !== null && _a !== void 0 ? _a : [];
        for (var _c = 0, keys_2 = keys; _c < keys_2.length; _c++) {
            var next = keys_2[_c];
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
    return visited;
}
// console.log(
// 	access([
// 		[1, 2],
// 		[2, 3],
// 		[3, 4],
// 		[4, 5],
// 		[5, 6],
// 	])
// );
// console.log(
// 	access([
// 		[1, 2],
// 		[2, 1],
// 		[1, 3],
// 		[3, 4],
//     [5,8]
// 	])
// );
console.log(accessBfs([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
]));
