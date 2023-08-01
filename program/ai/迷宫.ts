interface Point {
  row: number;
  col: number;
}

function minPathSum(grid: number[][]): number {
  const m: number = grid.length;
  const n: number = grid[0]!.length;

  const queue: Point[] = [{ row: 0, col: 0 }];
  const visited: Set<string> = new Set<string>(["0,0"]);

  while (queue.length) {
    const { row, col } = queue.shift() as Point;

    if (row === m - 1 && col === n - 1) {
      return grid[row]![col]!;
    }

    const neighbors: Point[] = [
      { row: row + 1, col },
      { row, col: col + 1 },
    ];

    for (const neighbor of neighbors) {
      const { row: nextRow, col: nextCol } = neighbor;

      if (
        nextRow >= 0 &&
        nextRow < m &&
        nextCol >= 0 &&
        nextCol < n &&
        !visited.has(`${nextRow},${nextCol}`)
      ) {
        queue.push(neighbor);
        visited.add(`${nextRow},${nextCol}`);
        grid[nextRow]![nextCol] += grid[row]![col]!;
      }
    }
  }

  return -1;
}

// const readline = require("readline-sync");

// const m: number = parseInt(readline.question("Enter the number of rows: "));
// const n: number = parseInt(readline.question("Enter the number of columns: "));

// const grid: number[][] = [];
// for (let i = 0; i < m; i++) {
//   const row: number[] = readline
//     .question(`Enter the numbers for row ${i + 1}: `)
//     .split(" ")
//     .map(Number);
//   grid.push(row);
// }

const result: number = minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]);
console.log(result);
export {}


setTimeout(() => console.log('a'));
Promise.resolve().then(
   () => console.log('b')
 ).then(
   () => Promise.resolve('c').then(
     (data) => {
       setTimeout(() => console.log('d'));
       console.log('f');
       return data;
     }
   )
 ).then(data => console.log(data));