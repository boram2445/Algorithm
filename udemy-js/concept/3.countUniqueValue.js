//3. 다중 포인터 - 같은 방향으로 움직이기
//i=0, j=1에서 시작한다.
//j가 이동하다가 i 값이랑 다르면, i를 다음으로 이동시키고, j의 값을 넣어준다.
//(j의 값을 넣어주지 않으면 j가 같은 값일때도 포함시킨다.)
//값은 i+1

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
