function solution(s) {
  const nums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < nums.length; i++) {
    let numRegExpAll = new RegExp(nums[i], "g");
    s = s.replace(numRegExpAll, i);
  }
  return parseInt(s);
}
