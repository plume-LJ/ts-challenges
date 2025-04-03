"use strict";
exports.__esModule = true;
function solveDiagonalSudoku(board) {
    var emptyCell = findEmptyCell(board);
    if (!emptyCell) {
        return true;
    }
    var row = emptyCell[0], col = emptyCell[1];
    for (var num = 1; num <= 9; num++) {
        if (isValidMove(board, row, col, num)) {
            board[row][col] = num;
            if (solveDiagonalSudoku(board)) {
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
    // Check if the number already exists in the same diagonal
    if (row === col) {
        for (var i = 0; i < 9; i++) {
            if (board[i][i] === num && i !== row) {
                return false;
            }
        }
    }
    if (row + col === 8) {
        for (var i = 0; i < 9; i++) {
            if (board[i][8 - i] === num && i !== row) {
                return false;
            }
        }
    }
    return true;
}
// Example diagonal Sudoku board
var board = [
    [5, 0, 0, 0, 0, 0, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
if (solveDiagonalSudoku(board)) {
    console.log("Sudoku solved:");
    console.log(board);
}
else {
    console.log("No solution found for the Sudoku puzzle.");
}
