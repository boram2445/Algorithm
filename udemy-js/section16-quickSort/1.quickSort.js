function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, swapIndex, start);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotPoint = pivot(arr, left, right);
    quickSort(arr, left, pivotPoint - 1);
    quickSort(arr, pivotPoint + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
