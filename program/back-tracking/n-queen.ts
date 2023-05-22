// function solveNQueens(n: number): string[][] {
//   const board: string[][] = new Array(n).fill(0).map(_ => new Array(n).fill('.'));
//   const resArr: string[][] = [];
//   backTracking(n, 0, board);
//   return resArr;
//   function backTracking(n: number, rowNum: number, board: string[][]): void {
//       if (rowNum === n) {
//           resArr.push(transformBoard(board));
//           return;
//       }
//       for (let i = 0; i < n; i++) {
//           if (isValid(i, rowNum, board) === true) {
//               board[rowNum][i] = 'Q';
//               backTracking(n, rowNum + 1, board);
//               board[rowNum][i] = '.';
//           }
//       }
//   }
// };
// function isValid(col: number, row: number, board: string[][]): boolean {
//   const n: number = board.length;
//   if (col < 0 || col >= n || row < 0 || row >= n) return false;
//   // 检查列
//   for (let row of board) {
//       if (row[col] === 'Q') return false;
//   }
//   // 检查45度方向
//   let x: number = col,
//       y: number = row;
//   while (y >= 0 && x < n) {
//       if (board[y--][x++] === 'Q') return false;
//   }
//   // 检查135度方向
//   x = col;
//   y = row;
//   while (x >= 0 && y >= 0) {
//       if (board[y--][x--] === 'Q') return false;
//   }
//   return true;
// }
// function transformBoard(board: string[][]): string[] {
//   const resArr: string[] = [];
//   for (let row of board) {
//       resArr.push(row.join(''));
//   }
//   return resArr;
// }
// ```javascript
function solveNQueens(n: number) {
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
  const cols = new Set<number>();
  const diagonals1 = new Set<number>();
  const diagonals2 = new Set<number>();
  const res: string[][] = [];

  function backtrack(row: number) {
    if (row === n) {
      const copy = board.map(arr => arr.join(''));
      res.push(copy);
      return;
    }

    for (let col = 0; col < n; col++) {
      const diagonal1 = row - col;
      const diagonal2 = row + col;
      if (cols.has(col) || diagonals1.has(diagonal1) || diagonals2.has(diagonal2)) {
        continue;
      }

      board[row]![col] = 'Q';
      cols.add(col);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);

      backtrack(row + 1);

      board[row]![col] = '.';
      cols.delete(col);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
    }
  }

  backtrack(0);
  return res;
}
console.log(solveNQueens(3))
console.log(solveNQueens(4))
console.log(solveNQueens(5))
console.log(solveNQueens(6))
