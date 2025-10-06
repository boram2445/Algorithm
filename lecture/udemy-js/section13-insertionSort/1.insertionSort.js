function insertionSort(arr) {
  //비교값 선택
  for (let i = 1; i < arr.length; i++) {
    //앞에 있는 값들
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([5, 10, 3, 4, 2, 9]));
