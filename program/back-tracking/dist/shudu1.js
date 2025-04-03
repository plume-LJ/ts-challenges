"use strict";
exports.__esModule = true;
/**
 Do not return anything, modify board in-place instead.
 */
function isValid(col, row, val, board) {
    var n = board.length;
    // 列向检查
    for (var rowIndex = 0; rowIndex < n; rowIndex++) {
        if (board[rowIndex][col] === val)
            return false;
    }
    // 横向检查
    for (var colIndex = 0; colIndex < n; colIndex++) {
        if (board[row][colIndex] === val)
            return false;
    }
    // 九宫格检查
    var startX = Math.floor(col / 3) * 3;
    var startY = Math.floor(row / 3) * 3;
    for (var rowIndex = startY; rowIndex < startY + 3; rowIndex++) {
        for (var colIndex = startX; colIndex < startX + 3; colIndex++) {
            if (board[rowIndex][colIndex] === val)
                return false;
        }
    }
    return true;
}
function solveSudoku(board) {
    var n = 9;
    var result = backTracking(n, board);
    if (result)
        return board;
    else {
        console.log('no solution');
        return;
    }
    function backTracking(n, board) {
        for (var row = 0; row < n; row++) {
            for (var col = 0; col < n; col++) {
                if (board[row][col] === ".") {
                    for (var i = 1; i <= n; i++) {
                        if (isValid(col, row, String(i), board)) {
                            board[row][col] = String(i);
                            if (backTracking(n, board) === true)
                                return true;
                            board[row][col] = ".";
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
}
console.log(solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]));
