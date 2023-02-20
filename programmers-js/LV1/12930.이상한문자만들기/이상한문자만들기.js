function getWord(word) {
  let res = "";
  for (let i = 0; i < word.length; i++) {
    res += i % 2 ? word[i].toLowerCase() : word[i].toUpperCase();
  }
  return res;
}

function solution(s) {
  let arr = s.split(" ");
  return arr.map((item) => getWord(item)).join(" ");
}
