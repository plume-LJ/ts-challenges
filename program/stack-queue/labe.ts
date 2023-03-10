function removeDuplicates(s: string): string {
  const helperStack: string[] = [];
  let i: number = 0;
  while (i < s.length) {
      let top: string = helperStack[helperStack.length - 1];
      if (top === s[i]) {
          helperStack.pop();
      } else {
          helperStack.push(s[i]);
      }
      i++;
  }
  let res: string = '';
  while (helperStack.length > 0) {
      res = helperStack.pop() + res;
  }
  return res;
};