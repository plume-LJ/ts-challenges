var Point = /** @class */ (function () {
    function Point(x, y, prev) {
        if (prev === void 0) { prev = null; }
        this.x = x;
        this.y = y;
        this.prev = prev;
    }
    return Point;
}());
function shortestPath(maze) {
    var rows = maze.length;
    var cols = maze[0].length;
    var queue = [];
    queue.push(new Point(0, 0));
    var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右，下，左，上
    var visited = Array.from({ length: rows }, function () { return new Array(cols).fill(false); });
    visited[0][0] = true;
    while (queue.length > 0) {
        var curr = queue.shift();
        var currX = curr.x;
        var currY = curr.y;
        if (currX === rows - 1 && currY === cols - 1) {
            return getPath(curr);
        }
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var direction = directions_1[_i];
            var newX = currX + direction[0];
            var newY = currY + direction[1];
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === 0 && !visited[newX][newY]) {
                visited[newX][newY] = true;
                queue.push(new Point(newX, newY, curr));
            }
        }
    }
    return null;
}
function getPath(end) {
    var path = [];
    var curr = end;
    while (curr !== null) {
        path.unshift(new Point(curr.x, curr.y));
        curr = curr.prev;
    }
    return path;
}
var maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]
];
var start = [0, 0];
var destination = [4, 4];
console.log(shortestPath(maze));
