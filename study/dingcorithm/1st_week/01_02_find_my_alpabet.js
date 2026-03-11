function findMaxOccurredAlphabet(string) {
  const arr = find_alphabet_occurrence_array(string);

  let maxCount = 0;
  let resultAlpha;
  for (let i = 0; i < arr.length; i++) {
    if (maxCount < arr[i]) {
      maxCount = arr[i];
      resultAlpha = String.fromCharCode(i + "a".charCodeAt(0));
    }
  }
  return resultAlpha;
}

function find_alphabet_occurrence_array(string) {
  const arr = Array(26).fill(0);
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] === " ") continue;
  //   let index = string[i].charCodeAt(0) - "a".charCodeAt(0);
  //   arr[index] += 1;
  // }
  for (const ch in string) {
    if (!/a-zA-Z/.test(ch)) {
      continue;
    }
    const arrIndex = ch.charCodeAt(0) - "a".charCodeAt(0);
    arr[arrIndex] += 1;
  }
  return arr;
}

console.log(
  "정답 = i 현재 풀이 값 = " +
    findMaxOccurredAlphabet("hello my name is dingcodingco"),
);
console.log(
  "정답 = e 현재 풀이 값 = " + findMaxOccurredAlphabet("we love algorithm"),
);
console.log(
  "정답 = b 현재 풀이 값 = " + findMaxOccurredAlphabet("best of best youtube"),
);
