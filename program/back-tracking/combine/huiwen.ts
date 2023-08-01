function partition(s: string): string[][] {
  const res: string[][] = []
  const path: string[] = []
  const isHuiwen = (
      str: string, 
      startIndex: number, 
      endIndex: number
      ): boolean => {
      for (; startIndex < endIndex; startIndex++, endIndex--) {
          if (str[startIndex] !== str[endIndex]) {
              return false
          }
      }
      return true
  }
  const rec = (str: string, index: number): void => {
      if (index === str.length) {
          res.push([...path])
          return
      }
      for (let i = index; i < str.length; i++) {
          if (!isHuiwen(str, index, i)) {
             continue
          }
          path.push(str.substring(index, i + 1))
          rec(str, i + 1)
          path.pop()
      }
  }
  rec(s, 0)
  return res
};

console.log(partition("abab"));

export {}