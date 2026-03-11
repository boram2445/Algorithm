function findNotRepeatingFirstCharacter(string) {
  const alpha_array = findAlphabetOccurrenceArray(string);

  for (let char of string) {
    let char_count = alpha_array[char.charCodeAt(0) - "a".charCodeAt(0)];
    if (char_count === 1) {
      return char;
    }
  }

  return "_";
}

function findAlphabetOccurrenceArray(string) {
  const alpha_array = Array(26).fill(0);

  for (let char of string) {
    if (!/[a-zA-Z]/.test(char)) {
      continue;
    }
    let char_index = char.charCodeAt(0) - "a".charCodeAt(0);
    alpha_array[char_index] += 1;
  }
  return alpha_array;
}

console.log(
  "정답 = d 현재 풀이 값 = " + findNotRepeatingFirstCharacter("abadabac"),
);
console.log(
  "정답 = c 현재 풀이 값 = " + findNotRepeatingFirstCharacter("aabbcddd"),
);
console.log(
  "정답 = _ 현재 풀이 값 = " + findNotRepeatingFirstCharacter("aaaaaaaa"),
);
