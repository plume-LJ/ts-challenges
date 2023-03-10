function isValid(s: string): boolean {
  let helperStack: string[] = [];
  for (let i = 0, length = s.length; i < length; i++) {
      let x: string = s[i];
      switch (x) {
          case '(':
              helperStack.push(')');
              break;
          case '[':
              helperStack.push(']');
              break;
          case '{':
              helperStack.push('}');
              break;
          default:
              if (helperStack.pop() !== x) return false;
              break;
      }
  }
  return helperStack.length === 0;
};

function isValid1(s: string): boolean {
  type BracketMap = {
      [index: string]: string;
  }
  let helperStack: string[] = [];
  let bracketMap: BracketMap = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i of s) {
      if (bracketMap.hasOwnProperty(i)) {
          helperStack.push(bracketMap[i]);
      } else if (i !== helperStack.pop()) {
          return false;
      }
  }
  return helperStack.length === 0;
};

console.log(isValid1('([)]'))