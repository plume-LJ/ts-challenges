/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph: number[][]) {
  const ans: number[][] = []
    const n = graph.length

    function backtrack(cur: number, path: number[]) {
        if (cur === n - 1) {
            ans.push(path.slice(0))
            return
        }

        for (const g of graph[cur]) {
            path.push(g)
            backtrack(g, path)
            path.pop()
        }
    }

    backtrack(0, [0])
    return ans
};
// @lc code=end

function allPathsSourceTarget1(graph: number[][]): number[][] {
  const traceList: number[][] = []
  const pathList: number[] = []
  const n = graph.length
  const traverse = (graph: number[][], s: number, pathList: number[]) => {
      pathList.push(s)
      // 请你找出所有从节点 0 到节点 n-1 的路径
      if(s === n - 1) {
          traceList.push([...pathList])
      }
      graph[s].forEach(item => {
          traverse(graph, item, pathList)
      })
      pathList.pop()
  }
  traverse(graph, 0, pathList)
  return traceList
};

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))
console.log(allPathsSourceTarget1([[4,3,1],[3,2,4],[3],[4],[]]))