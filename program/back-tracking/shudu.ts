type Board = number[][];

function solveSudoku(board: Board): boolean {
  const emptyCell = findEmptyCell(board);
  if (!emptyCell) {
    return true;
  }

  const [row, col] = emptyCell;
  for (let num = 1; num <= 9; num++) {
    if (isValidMove(board, row, col, num)) {
      board[row]![col] = num;
      if (solveSudoku(board)) {
        return true;
      }
      board[row]![col] = 0;
    }
  }

  return false;
}

function findEmptyCell(board: Board): [number, number] | null {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row]![col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
}

function isValidMove(board: Board, row: number, col: number, num: number): boolean {
  // Check if the number already exists in the same row
  for (let i = 0; i < 9; i++) {
    if (board[row]![i] === num) {
      return false;
    }
  }

  // Check if the number already exists in the same column
  for (let i = 0; i < 9; i++) {
    if (board[i]![col] === num) {
      return false;
    }
  }

  // Check if the number already exists in the same 3x3 grid
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i]![startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}

// Example Sudoku board
const board: Board = [
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
  for (const row of board) {
    console.log(row);
  }
} else {
  console.log("No solution exists.");
}


export {}