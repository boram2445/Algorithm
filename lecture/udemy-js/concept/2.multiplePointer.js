//2. 다중 포인터
//정렬되어있는 배열, 합이 0인 첫번째 쌍
//합이 0보다 크면 오른쪽에 있는 포인터를 왼쪽으로
//합이 0보다 작으면 왼편에 있는 포인터를 오른쪽으로
console.log(sumzero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
console.log(sumzero([-2, 0, 1, 3])); //undefined
console.log(sumzero([1, 2, 3])); //undefined

function sumzero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum < 0) left += 1;
    else right -= 1;
  }
  return;
}
