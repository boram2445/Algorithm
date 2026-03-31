function main() {
  console.log("정답 = true / 현재 풀이 값 = " + isCorrectParenthesis("(())"));
  console.log("정답 = false / 현재 풀이 값 = " + isCorrectParenthesis(")"));
  console.log(
    "정답 = false / 현재 풀이 값 = " + isCorrectParenthesis("((())))"),
  );
  console.log("정답 = false / 현재 풀이 값 = " + isCorrectParenthesis("())()"));
  console.log("정답 = false / 현재 풀이 값 = " + isCorrectParenthesis("((())"));
}

function isCorrectParenthesis(string) {
  let left_count = 0;
  let right_count = 0;

  for (let item of string) {
    if (item === "(") {
      left_count += 1;
    } else {
      right_count += 1;
    }
  }

  return left_count === right_count;
}

// Run the main function
main();
