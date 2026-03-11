// 0 에서 1을 마주쳤을 때 뒤집는다 -> 전체를 0으로 만들기 위한 작업
// 1 에서 0을 마주쳤을 때 뒤집는다 -> 전체를 1로 만들기 위한 작업

function findCountToTurnOutToAllZeroOrAllOne(string) {
  let all_to_zero_count = 0;
  let all_to_one_count = 0;

  if (string[0] === 1) {
    all_to_zero_count += 1;
  } else {
    all_to_one_count += 1;
  }
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] !== string[i + 1]) {
      if (string[i] === 0) {
        all_to_one_count += 1;
      } else {
        all_to_zero_count += 1;
      }
    }
  }

  return Math.min(all_to_one_count, all_to_zero_count);
}

const input = "011110";
const result = findCountToTurnOutToAllZeroOrAllOne(input);
console.log(result);
