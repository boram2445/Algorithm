function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    //5,4,3,2,1 총 5바퀴 반복
    let noSwaps; //한바퀴 반복할떄마다 swap이 일어났는지 판단한다.
    for (let j = 0; j < i - 1; j++) {
      //한바퀴 비교를 하면 정렬된 마지막 값을 빼고 비교를 한다.
      noSwaps = true;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break; //한바퀴를 도는데 swap이 일어나지 않았으면 정렬이 완료된 것이다.
  }
  return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2]));
