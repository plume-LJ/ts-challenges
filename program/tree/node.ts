export class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


function quickSort(arr: number[], left: number, right: number): void {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function partition(arr: number[], left: number, right: number): number { 

  const pivot = arr[Math.floor((right + left) / 2)]!;
  // console.log(pivot)
  let i = left;
  let j = right;
  while (i < j) {
    while (arr[i]! < pivot ) {
      i++;
    }
    while (arr[j]! > pivot ) {
      j--;
    }
    // console.log(arr, i, j);
    if (i < j) {
      console.log(arr, left, right);
      [arr[i], arr[j]] = [arr[j]!, arr[i]!];
      console.log(arr, pivot, i, j);
    }
    if (arr[j] === pivot) { 
      i++;
    }
    if (arr[i] === pivot) { 
      j--;
    }
  }
  // console.log(arr, i, j);
  // [arr[left], arr[j]] = [arr[j]!, arr[left]!];
  return j;
}

// let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
// 135782469
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);