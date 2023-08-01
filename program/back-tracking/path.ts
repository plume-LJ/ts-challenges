function findItinerary(tickets: string[][]): string[] {
  /**
      TicketsMap 实例：
      { NRT: Map(1) { 'JFK' => 1 }, JFK: Map(2) { 'KUL' => 1, 'NRT' => 1 } }
      这里选择Map数据结构的原因是：与Object类型的一个主要差异是，Map实例会维护键值对的插入顺序。
   */
  type TicketsMap = {
    [index: string]: Map<string, number>;
  };
  tickets.sort((a, b) => {
    return a[1]! < b[1]! ? -1 : 1;
  });
  const ticketMap: TicketsMap = {};
  for (const [from, to] of tickets) {
    if (ticketMap[from!] === undefined) {
      ticketMap[from!] = new Map();
    }
    ticketMap[from!]!.set(to!, (ticketMap[from!]!.get(to!) || 0) + 1);
  }
  const resRoute = ["JFK"];
  backTracking(tickets.length, ticketMap, resRoute);
  return resRoute;
  function backTracking(
    ticketNum: number,
    ticketMap: TicketsMap,
    route: string[]
  ): boolean {
    if (route.length === ticketNum + 1) return true;
    const targetMap = ticketMap[route[route.length - 1]!];
    if (targetMap !== undefined) {
      // @ts-ignore
      for (const [to, count] of targetMap.entries()) {
        if (count > 0) {
          route.push(to);
          targetMap.set(to, count - 1);
          if (backTracking(ticketNum, ticketMap, route) === true) return true;
          targetMap.set(to, count);
          route.pop();
        }
      }
    }
    return false;
  }
}

function findItinerary1(tickets: string[][]): [string[], boolean] {
  const graph: { [key: string]: string[] } = {};

  // 构建邻接表
  for (const ticket of tickets) {
    const [from, to] = ticket;
    if (!graph[from!]) {
      graph[from!] = [];
    }
    graph[from!]!.push(to!);
  }

  // 对邻接表进行排序
  for (const airport in graph) {
    graph[airport]!.sort();
  }

  const itinerary: string[] = [];
  dfs("JFK");

  return [itinerary.reverse(), itinerary.length === tickets.length + 1];

  function dfs(airport: string) {
    const destinations = graph[airport];

    while (destinations && destinations.length > 0) {
      const nextAirport = destinations.shift()!;
      dfs(nextAirport);
    }

    itinerary.push(airport);
    console.log(itinerary);
  }
}

// 示例用法
const tickets = [
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFR", "SJC"],
  ["LHR", "SFO"],
];

const result = findItinerary1(tickets);
console.log(result);

export {};

// console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
