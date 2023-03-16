// const col = [];
// const dg = [];
// const udg = [];
// const result = []

function transformBoard1(board) {
  const resArr = [];
  for (let row of board) {
    resArr.push(row.join(""));
  }
  return resArr;
}
function solve(n) {
  const result = [];

  const col = [];
  const dg = [];
  const udg = [];
  function dfs(u, n, arr) {
    // const result = []
    if (u === n) {
      // console.log(arr)
      console.log(col,dg,udg)
      result.push(transformBoard1(arr));
      // arr.pop();
    }
    for (let i = 0; i < n; i++) {
      if (!col[i] && !dg[i + u] && !udg[n + i - u]) {
        arr[u][i] = "Q";
        col[i] = dg[i + u] = udg[n + i - u] = true;
        dfs(u + 1, n, arr);
        arr[u][i] = ".";
        col[i] = dg[i + u] = udg[n + i - u] = false;
      }
    }
  }
  const arr = Array(n)
    .fill()
    .map(() => Array(n).fill("."));
  dfs(0, n, arr);
  console.log(result);
}
solve(3);
solve(4);
solve(5);
