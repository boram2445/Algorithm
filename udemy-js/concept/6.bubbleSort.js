function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) return arr;
  }
}

console.log(bubbleSort([1, 4, 13, 3, 10]));
