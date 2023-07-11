function quickSortStack(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const stack: [number, number][] = [[0, arr.length - 1]];
  while (stack.length) {
    const [low, high] = stack.pop()!;
    if (low >= high) {
      continue;
    }
    const pivot = arr[Math.floor((low + high) / 2)]!;
    let i = low;
    let j = high;
    while (i <= j) {
      while (arr[i]! < pivot) {
        i++;
      }
      while (arr[j]! > pivot) {
        j--;
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j]!, arr[i]!];
        i++;
        j--;
      }
    }
    if (j > low) {
      stack.push([low, j]);
    }
    if (i < high) {
      stack.push([i, high]);
    }
  }
  return arr;
}

console.log(quickSortStack([1,2,34,5,6,6,34,]))