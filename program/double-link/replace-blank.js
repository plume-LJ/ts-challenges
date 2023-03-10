function replaceBlank(str) {
  const arr = str.split("");
  let space = 0;
  for (let s of str) {
    if (s === " ") space++;
  }
  arr.length = arr.length + space * 2;
  let j = str.length -1;
  console.log(arr.length, j)
  for (let i = arr.length - 1; i >= 0; i--,j--) {
    if (arr[j] !== " ") {
      arr[i] = arr[j];
    } else {
      arr[i] = '0'
      arr[--i]= '2'
      arr[--i]= '%'
    }
  }
  return arr.join('')
}
console.log(replaceBlank('2323 sdsd sds'))