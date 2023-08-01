class Point {
  x: number;
  y: number;
  prev: Point | null;
  constructor(x: number, y: number, prev: Point | null = null) {
    this.x = x;
    this.y = y;
    this.prev = prev;
  }
}

function shortestPath(maze: number[][]): Point[] | null {
  const rows = maze.length;
  const cols = maze[0].length;

  const queue: Point[] = [];
  queue.push(new Point(0, 0));

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右，下，左，上

  const visited: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const curr = queue.shift()!;
    const currX = curr.x;
    const currY = curr.y;

    if (currX === rows - 1 && currY === cols - 1) {
      return getPath(curr);
    }

    for (const direction of directions) {
      const newX = currX + direction[0];
      const newY = currY + direction[1];

      if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === 0 && !visited[newX][newY]) {
        visited[newX][newY] = true;
        queue.push(new Point(newX, newY, curr));
      }
    }
  }

  return null;
}

function getPath(end: Point): Point[] {
  const path: Point[] = [];
  let curr: Point | null = end;

  while (curr !== null) {
    path.unshift(new Point(curr.x, curr.y));
    curr = curr.prev;
  }

  return path;
}



const maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0]
];

const start = [0, 0];
const destination = [4, 4];

console.log(shortestPath(maze));