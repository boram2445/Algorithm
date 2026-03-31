// 복습 필요

function main() {
  console.log("정답 = [4, 1, 3, 0] / 현재 풀이 값 = ");
  console.log(
    getMelonBestAlbum(
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 150, 800, 2500],
    ),
  );

  console.log("정답 = [0, 6, 5, 2, 4, 1] / 현재 풀이 값 = ");
  console.log(
    getMelonBestAlbum(
      ["hiphop", "classic", "pop", "classic", "classic", "pop", "hiphop"],
      [2000, 500, 600, 150, 800, 2500, 2000],
    ),
  );
}

function getMelonBestAlbum(genreArray, playArray) {
  // dict 에 넣어둔다
  // {classic = 합계 }
  // dict에 있는 값을 비교한다 classic / pop

  // pop에서의 가장 큰 값을 찾는다?
  // pop 각자의 값을 저장할수는 없는건가...?
  return result;
}

// Run the main function
main();
