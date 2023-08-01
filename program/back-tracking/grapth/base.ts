/*
     A
    / \
   B   C
  / \
 D   E

*/
interface Graph {
  [key: string]: string[];
}

function dfs(graph: Graph, start: string, visited: Set<string>) {
  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start]!) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

const graph: Graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: [],
  D: [],
  E: [],
};

const visited = new Set<string>();
dfs(graph, "A", visited);

class Queue<T> {
  private data: T[] = [];
  enqueue(...item: T[]) {
    this.data.push(...item);
  }
  dequeue(): T {
    return this.data.shift()!;
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
}

function bfs(graph: Graph, start: string) {
  const visited = new Set<string>();
  const queue = new Queue<string>();
  queue.enqueue(start);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (!visited.has(node)) {
      visited.add(node);
      console.log(node);
      queue.enqueue(...graph[node]!);
    }
  }
}

const graph1: Graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: [],
  D: [],
  E: [],
};

bfs(graph1, "A");

export {};
