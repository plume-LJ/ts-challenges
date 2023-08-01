/**
 Do not return anything, modify board in-place instead.
 */
function isValid(
  col: number,
  row: number,
  val: string,
  board: string[][]
): boolean {
  let n: number = board.length;
  // 列向检查
  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    if (board[rowIndex]![col] === val) return false;
  }
  // 横向检查
  for (let colIndex = 0; colIndex < n; colIndex++) {
    if (board[row]![colIndex] === val) return false;
  }
  // 九宫格检查
  const startX = Math.floor(col / 3) * 3;
  const startY = Math.floor(row / 3) * 3;
  for (let rowIndex = startY; rowIndex < startY + 3; rowIndex++) {
    for (let colIndex = startX; colIndex < startX + 3; colIndex++) {
      if (board[rowIndex]![colIndex] === val) return false;
    }
  }
  return true;
}
function solveSudoku(board: string[][]) {
  let n: number = 9;
  const result = backTracking(n, board);
  if (result) return board;
  else {
    console.log('no solution')
    return
  }
  function backTracking(n: number, board: string[][]): boolean {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row]![col] === ".") {
          for (let i = 1; i <= n; i++) {
            if (isValid(col, row, String(i), board)) {
              board[row]![col] = String(i);
              if (backTracking(n, board) === true) return true;
              board[row]![col] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }
}

console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
export{}