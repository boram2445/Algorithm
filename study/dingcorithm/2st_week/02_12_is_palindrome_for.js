// 🔁 복습 필요 (3/26)(3/30)

function is_palindrome(string) {
  // 0, 4
  // 1, 3
  // 2

  // 방법 1. 제일 앞이랑 제일 뒤랑 비교해가기
  // let i;
  // for (i = 0; i <= (string.length - 1) / 2; i++) {
  //   if (string[i] !== string[string.length - 1 - i]) {
  //     return false;
  //   }
  // }

  // 방법 2. 재귀 함수 이용하기
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  if (string.length <= 1) {
    return true;
  }
  return is_palindrome(string.slice(1, -1));
}

console.log(is_palindrome("소주만병만주소"));
