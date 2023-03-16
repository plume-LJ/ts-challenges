function KMP(str1, str2) {
  function getNext(str2) {
    const next = [];
    let i = 0;
    let j = -1;
    next[i] = j;
    while (i < str2.length) {
      if (j === -1 || str2[i] === str2[j]) {
        i++;
        j++;
        next[i] = j;
      } else {
        j = next[j];
      }
    }
    return next
  }
  const next = getNext(str2);
  console.log(next);
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (j === -1 || str1[i] == str2[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  if ((j === str2.length)) return i - j;
  return -1;
}
console.log(KMP("asdfasdfsafabababafababababababsdf", "abababca"));
