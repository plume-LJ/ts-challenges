/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    var ans = [];
    var n = graph.length;
    function backtrack(cur, path) {
        if (cur === n - 1) {
            ans.push(path.slice(0));
            return;
        }
        for (var _i = 0, _a = graph[cur]; _i < _a.length; _i++) {
            var g = _a[_i];
            path.push(g);
            backtrack(g, path);
            path.pop();
        }
    }
    backtrack(0, [0]);
    return ans;
};
// @lc code=end
function allPathsSourceTarget1(graph) {
    var traceList = [];
    var pathList = [];
    var n = graph.length;
    var traverse = function (graph, s, pathList) {
        pathList.push(s);
        // 请你找出所有从节点 0 到节点 n-1 的路径
        if (s === n - 1) {
            traceList.push(__spreadArrays(pathList));
        }
        graph[s].forEach(function (item) {
            traverse(graph, item, pathList);
        });
        pathList.pop();
    };
    traverse(graph, 0, pathList);
    return traceList;
}
;
console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
console.log(allPathsSourceTarget1([[4, 3, 1], [3, 2, 4], [3], [4], []]));
