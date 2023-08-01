function sundaySearch(text: string, pattern: string): number {
  const textLength = text.length;
  const patternLength = pattern.length;

  if (patternLength > textLength) {
    return -1;
  }

  const patternMap = new Map<string, number>();
  for (let i = 0; i < patternLength; i++) {
    patternMap.set(pattern[i], patternLength - i);
  }

  console.log(patternMap)

  let i = 0;
  while (i <= textLength - patternLength) {
    let j = 0;
    while (j < patternLength && text[i + j] === pattern[j]) {
      j++;
    }

    if (j === patternLength) {
      return i;
    }

    const nextChar = text[i + patternLength];
    const shift = patternMap.get(nextChar) || patternLength + 1;
    i += shift;
  }

  return -1;
}

console.log(sundaySearch("asdfasdfsafabababafabababcacasdf", "abcabcd"))