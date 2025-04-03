function solveNQ(n) {
    var board = Array.from({ length: n }, function () {
        return Array.from({ length: n }, function () { return "."; });
    });
    var colSet = new Set();
    var helperSet1 = new Set();
    var helperSet2 = new Set();
    var resArr = [];
    function backTracking(row, path) {
        if (row === n) {
            resArr.push(board.map(function (arr) { return arr.join(""); }));
        }
        for (var col = 0; col < n; col++) {
            var tmp1 = row + col;
            var tmp2 = row - col;
            if (colSet.has(col))
                continue;
            if (helperSet1.has(tmp1))
                continue;
            if (helperSet2.has(tmp2))
                continue;
            colSet.add(col);
            helperSet1.add(tmp1);
            helperSet2.add(tmp2);
            board[row][col] = "Q";
            backTracking(row + 1, path);
            board[row][col] = ".";
            colSet["delete"](col);
            helperSet1["delete"](tmp1);
            helperSet2["delete"](tmp2);
        }
    }
    backTracking(0, []);
    // console.log(resArr)
    return resArr;
}
console.log(solveNQ(3), solveNQ(3).length);
console.log(solveNQ(4), solveNQ(4).length);
console.log(solveNQ(5), solveNQ(5).length);
console.log(solveNQ(6), solveNQ(6).length);
