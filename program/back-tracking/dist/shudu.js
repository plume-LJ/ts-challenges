"use strict";
exports.__esModule = true;
function solveSudoku(board) {
    var emptyCell = findEmptyCell(board);
    if (!emptyCell) {
        return true;
    }
    var row = emptyCell[0], col = emptyCell[1];
    for (var num = 1; num <= 9; num++) {
        if (isValidMove(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
                return true;
            }
            board[row][col] = 0;
        }
    }
    return false;
}
function findEmptyCell(board) {
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null;
}
function isValidMove(board, row, col, num) {
    // Check if the number already exists in the same row
    for (var i = 0; i < 9; i++) {
        if (board[row][i] === num) {
            return false;
        }
    }
    // Check if the number already exists in the same column
    for (var i = 0; i < 9; i++) {
        if (board[i][col] === num) {
            return false;
        }
    }
    // Check if the number already exists in the same 3x3 grid
    var startRow = Math.floor(row / 3) * 3;
    var startCol = Math.floor(col / 3) * 3;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }
    return true;
}
// Example Sudoku board
var board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
if (solveSudoku(board)) {
    console.log("Solution:");
    for (var _i = 0, board_1 = board; _i < board_1.length; _i++) {
        var row = board_1[_i];
        console.log(row);
    }
}
else {
    console.log("No solution exists.");
}
