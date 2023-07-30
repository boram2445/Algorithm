function findGroup(a, b, arr) {
  if (a === b) return false;
  for (let i = 0; i < arr.length; i++) {
    let aRank = -1;
    let bRank = -1;
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === a) aRank = j;
      if (arr[i][j] === b) bRank = j;
      if (aRank === -1 && bRank !== -1) return false;
    }
  }
  return true;
}

function solution(test) {
  let answer = 0;
  let n = test[0].length;
  //학생 매칭
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (findGroup(i + 1, j + 1, arr)) {
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
