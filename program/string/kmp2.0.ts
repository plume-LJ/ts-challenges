export function KMP(t: string, p: string): number {
  let i = 0;
  let j = 0;
  const n = t.length;
  const m = p.length;
  const next = calculateNext(p);

  while (i < n && j < m) {
    if (j === -1 || t[i] === p[j]) {
      i++;
      j++;
    } else {
      j = next[j]!;
    }
    console.log(i, j);
  }

  if (j === m) {
    return i - j;
  } else {
    return -1;
  }
}

function calculateNext(p: string): number[] {
  const m = p.length;
  const next: number[] = new Array(m);
  next[0] = -1;
  let i = 0;
  let j = -1;

  while (i < m - 1) {
    if (j === -1 || p[i] === p[j]) {
      i++;
      j++;
      next[i] = j;
    } else {
      j = next[j]!;
    }
  }

  return next;
}
console.log(KMP("abcdababcda", "ababcda"));

function strToInt(str: string): number {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);
  const stateMachine = {
    start: {
      whitespace: "start",
      sign: "signed",
      digit: "inNumber",
      other: "end",
    },
    signed: {
      digit: "inNumber",
      other: "end",
    },
    inNumber: {
      digit: "inNumber",
      other: "end",
    },
    end: {
      other: "end",
    },
  } as const;

  let state: "start" | "signed" | "inNumber" | "end" = "start";
  let sign = 1;
  let result = 0;

  for (let char of str) {
    const type = getCharType(char);
    if (stateMachine[state])
      // @ts-ignore
      state = stateMachine[state][type];

    if (state === "signed") {
      sign = char === "-" ? -1 : 1;
    } else if (state === "inNumber") {
      const digit = Number(char);
      if (
        result > Math.floor(INT_MAX / 10) ||
        (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
      ) {
        return sign === 1 ? INT_MAX : INT_MIN;
      }
      result = result * 10 + digit;
    } else if (state === "end") {
      break;
    }
  }

  return result === 0 ? 0 : sign * result;
}

function getCharType(char: string): "whitespace" | "sign" | "digit" | "other" {
  if (char === " " || char === "\t") {
    return "whitespace";
  } else if (char === "+" || char === "-") {
    return "sign";
  } else if (/[0-9]/.test(char)) {
    return "digit";
  } else {
    return "other";
  }
}

// Example usage
console.log(strToInt("42")); // Output: 42
console.log(strToInt("   -42")); // Output: -42
console.log(strToInt("4193 with words")); // Output: 4193
console.log(strToInt("words and 987")); // Output: 0
console.log(strToInt("-91283472332")); // Output: -2147483648
console.log(strToInt("-+2")); // Output: 0


function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  backtrack(result, "", 0, 0, n);
  return result;
}

function backtrack(result: string[], current: string, openCount: number, closeCount: number, n: number) {
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }

  if (openCount < n) {
    backtrack(result, current + "(", openCount + 1, closeCount, n);
  }
  if (closeCount < openCount) {
    backtrack(result, current + ")", openCount, closeCount + 1, n);
  }
}
