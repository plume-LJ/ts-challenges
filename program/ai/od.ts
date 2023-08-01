function findBestMove(color: number, board: number[]): number {
  const length = board.length;
  let maxLength = 0;
  let bestMove = -1;

  for (let i = 0; i < length; i++) {
    if (board[i] === 0) {
      board[i] = color;
      const currLength = getMaxContinuousLength(board, color);
      board[i] = 0;

      if (currLength < 5 && currLength > maxLength) {
        maxLength = currLength;
        bestMove = i;
      } else if (currLength === maxLength && Math.abs(i - Math.floor(length / 2)) < Math.abs(bestMove - Math.floor(length / 2))) {
        bestMove = i;
      }
    }
  }

  return bestMove;
}

function getMaxContinuousLength(board: number[], color: number): number {
  const length = board.length;
  let maxLength = 0;
  let currLength = 0;

  for (let i = 0; i < length; i++) {
    if (board[i] === color) {
      currLength++;
      if (currLength > maxLength) {
        maxLength = currLength;
      }
    } else {
      currLength = 0;
    }
  }

  return maxLength;
}

// 示例用法
const color = 1;
const board = [-1, 0, 1, 1, 1, 1, 1, 0, 1];
const bestMove = findBestMove(color, board);
console.log(bestMove);
