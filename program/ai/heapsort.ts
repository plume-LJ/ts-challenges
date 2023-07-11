let cc = 1
function heapSort(arr: number[]): void {
  function heapify(n: number, i: number) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (l < n && arr[l]! > arr[largest]!) {
      largest = l;
    }
    if (r < n && arr[r]! > arr[largest]!) {
      largest = r;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest]!, arr[i]!];
      console.log(arr, cc++)
      heapify(n, largest);
    }
  }

  const n = arr.length;
  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
    // console.log(arr)
  }
  // Extract elements from heap
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i]!, arr[0]!];
    heapify(i, 0);
  }
}
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
heapSort(arr);
console.log(arr);

export {
  heapSort
}