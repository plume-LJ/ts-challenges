function reverse(str) {
  let arr = str.split("");
  let fast = arr.length - 1;
  let slow = 0;
  while (fast > slow) {
    [arr[fast], arr[slow]] = [arr[slow], arr[fast]];
    fast--;
    slow++;
  }
  return arr.join('');
}

let a = "23adc";
reverse(a);
console.log(reverse(a));
