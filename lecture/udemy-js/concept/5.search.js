//5. 분할정복
//배열이나 문자열같은 큰 규모의 데이터셋을 처리한다.
//값을 찾기 위해 배열의 왼쪽에서 시작하여 오른쪽 끝까지 이동하기 보다는,
//배열을 작은 조각으로 세분하여 조각들을 어디로 이동시킬지 결정한다.

//배열에서 주어진 값이 위치한 인덱스를 반환하여라
//분할정복을 통해 중간값을 찾아나가면, log N 의 시간이 걸리게 된다.

console.log(search([1, 2, 3, 4, 5, 6], 4)); //3
console.log(search([1, 2, 3, 4, 5, 6], 6)); //5
console.log(search([1, 2, 3, 4, 5, 6], 11)); //-1

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    if (arr[middle] < num) {
      min = middle + 1;
    } else if (arr[middle] > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
