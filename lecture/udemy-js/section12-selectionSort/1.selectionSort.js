function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));

/**
 * 나는 let min = 값, let minIndex; 이렇게 두개의 변수를 설정했는데
 * 사실은 minIndex만 있어도 값을 구할 수 있는 문제였다.
 * i!== minIndex를 해서 min값이 변경되었는지 확인해주는게 반복을 줄여주는 방법이다.
 */
