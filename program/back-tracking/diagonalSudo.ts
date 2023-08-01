type Board = number[][];

function solveDiagonalSudoku(board: Board): boolean {
  const emptyCell = findEmptyCell(board);
  if (!emptyCell) {
    return true;
  }

  const [row, col] = emptyCell;
  for (let num = 1; num <= 9; num++) {
    if (isValidMove(board, row, col, num)) {
      board[row]![col] = num;
      if (solveDiagonalSudoku(board)) {
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

  // Check if the number already exists in the same diagonal
  if (row === col) {
    for (let i = 0; i < 9; i++) {
      if (board[i]![i] === num && i !== row) {
        return false;
      }
    }
  }

  if (row + col === 8) {
    for (let i = 0; i < 9; i++) {
      if (board[i]![8 - i] === num && i !== row) {
        return false;
      }
    }
  }

  return true;
}

// Example diagonal Sudoku board
const board: Board = [
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
} else {
  console.log("No solution found for the Sudoku puzzle.");
}


export {}
