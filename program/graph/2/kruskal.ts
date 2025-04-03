import { DisjointSet } from '../disjoint-set';
class Edge {
  constructor(
    public from: number,
    public to: number,
    public weight: number
  ) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}
async function main() {

  let v: number = 0,
    e: number = 0;
  console.log('请输入顶点数和边数');
  for await (const line of console) {
    [v, e] = line.split(' ').map(Number);
    break;
  }
  console.log('请输入边的起点、终点和权重');
  let i = 0;
  const edges = new Array<Edge>();
  for await (const line of console) {
    const [x, y, k] = line.split(' ').map(Number);
    edges.push(new Edge(x, y, k));
    i++;
    if (i === e) break;
  }

  edges.sort((a, b) => a.weight - b .weight);

  const d = new DisjointSet(v);
  let res = 0;
  for (const edge of edges) {
    if (!d.isSame(edge.from, edge.to)) {
      d.union(edge.from, edge.to);
      res += edge.weight;
    }
  }
  console.log(res);
}

await main();