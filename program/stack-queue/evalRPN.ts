function evalRPN(arr: string[]) {
  type BracketMap = {
    [index: string]: (a:number,b:number)=> number;
}
  let stack: string[] = [];
  let op:BracketMap = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
  };
  let result:number = 0
  for (let i = 0; i < arr.length; i++) {
    if (op.hasOwnProperty(arr[i])) {
      let b = stack.pop()
      let a = stack.pop()
      result = op[arr[i]](Number(a), Number(b))
      stack.push(`${result}`)
    } else {
      stack.push(arr[i])
    }
  }
  return result
}

console.log(evalRPN(["2", "1", "+", "3", "*"]))