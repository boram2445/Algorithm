function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += s[i];
      continue;
    }
    let charNum = s[i].charCodeAt();
    let newCharNum = charNum + n;
    if (charNum >= 48 && charNum <= 57 && newCharNum > 57) {
      newCharNum -= 10;
    } else if (charNum >= 65 && charNum <= 90 && newCharNum > 90) {
      newCharNum -= 26;
    } else if (charNum >= 97 && charNum <= 122 && newCharNum > 122) {
      newCharNum -= 26;
    }
    result += String.fromCharCode(newCharNum);
  }
  return result;
}
