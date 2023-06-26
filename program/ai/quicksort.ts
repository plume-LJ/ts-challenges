function quickSort<T>(arr: T[], left: number, right: number): void {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function partition<T>(arr: T[], left: number, right: number): number {
  const pivot = arr[right]!;
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (arr[j]! <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, right);
    return i + 1;
  }
  function swap<T>(arr: T[], i: number, j: number): void {
    const temp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = temp;
  }
  
  let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  export {
    quickSort
  }