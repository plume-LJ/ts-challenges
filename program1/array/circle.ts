function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  if (matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // 从上到下
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      // 从右到左
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      // 从下到上
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

function generateMatrix(n: number): number[][] {
  let loopNum: number = Math.floor(n / 2);
  const resArr: number[][] = new Array(n).fill(1).map(i => new Array(n));
  let chunkNum: number = n - 1;
  let startX: number = 0;
  let startY: number = 0;
  let value: number = 1;
  let x: number, y: number;
  while (loopNum--) {
      x = startX;
      y = startY;
      while (x < startX + chunkNum) {
          resArr[y][x] = value;
          x++;
          value++;
      }
      while (y < startY + chunkNum) {
          resArr[y][x] = value;
          y++;
          value++;
      }
      while (x > startX) {
          resArr[y][x] = value;
          x--;
          value++;
      }
      while (y > startY) {
          resArr[y][x] = value;
          y--;
          value++;
      }
      startX++;
      startY++;
      chunkNum -= 2;
  }
  if (n % 2 === 1) {
      resArr[startX][startY] = value;
  }
  return resArr;
};


console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(generateMatrix(3));