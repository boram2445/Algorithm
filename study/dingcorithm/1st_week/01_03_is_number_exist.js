// 빅오 -> 최악의 경우.
// 빅오메가 -> 최선의 경우
function isNumberExist(number, array) {
  return array.some((num) => num == number);
}

console.log(
  "정답 = true 현재 풀이 값 = " + isNumberExist(3, [3, 5, 6, 1, 2, 4]),
); // 운이 좋은 경우!! 시간복잡도가 1밖에 안 걸림.
// -> 최선의 경우에는 1만큼의 연산만 필요하다.

console.log(
  "정답 = true 현재 풀이 값 = " + isNumberExist(4, [3, 5, 6, 1, 2, 4]),
); // 운이 좋지 않은 경우!!
// 이 경우에는 배열의 끝까지 찾아야 하기 때문에, 시간복잡도가 N 만큼 걸린다.

console.log("정답 = false 현재 풀이 값 = " + isNumberExist(7, [6, 6, 6]));
console.log(
  "정답 = true 현재 풀이 값 = " + isNumberExist(2, [6, 9, 2, 7, 1888]),
);
