function isValidIpSegment(str: string): boolean {
  let resBool: boolean = true;
  let tempVal: number = Number(str);
  if (
    str.length === 0 ||
    isNaN(tempVal) ||
    tempVal > 255 ||
    tempVal < 0 ||
    (str.length > 1 && str[0] === "0")
  ) {
    resBool = false;
  }
  return resBool;
}
function isValid(str: string, startIndex: number, endIndex: number): boolean {
  if (startIndex > endIndex) return false;
  if (str.charAt(startIndex) === "0" && startIndex === endIndex) return false;
  let num = 0;
  for (let i = startIndex; i < endIndex; i++) {
    num = num * 10 + Number(str.charAt(i));
    if (num > 255) return false;
  }
  return true;
}
function restoreIpAddresses(s: string): string[] {
  const resArr: string[] = [];
  backTracking(s, 0, []);
  return resArr;
  function backTracking(s: string, startIndex: number, route: string[]): void {
    let length: number = s.length;
    if (route.length === 4 && startIndex >= length) {
      resArr.push(route.join("."));
      return;
    }
    if (route.length === 4 || startIndex >= length) return;
    // let tempStr: string = "";
    for (let i = startIndex + 1; i <= Math.min(length, startIndex + 3); i++) {
      // tempStr = s.slice(startIndex, i);
      if (isValid(s, startIndex, i)) {
        route.push(s.slice(startIndex, i));
        backTracking(s, i, route);
        route.pop();
      }
    }
  }
}

console.log(restoreIpAddresses("25525511135"));

export {}