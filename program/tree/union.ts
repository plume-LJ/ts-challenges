class DisjointSet {
  private parent: number[];
  private rank: number[];
  private count: number;

  constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size);
    this.count = size;
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    this.count--;
  }

  getConnectedComponents(): number {
    return this.count;
  }
}

let d = new DisjointSet(5)
d.union(1, 2)
console.log(new DisjointSet(5));
console.log(d);

export {}