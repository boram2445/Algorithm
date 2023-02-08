function solution(s) {
  let pCount = 0;
  let yCount = 0;
  s.toLowerCase()
    .split("")
    .forEach((item) => {
      if (item === "p") pCount += 1;
      else if (item === "y") yCount += 1;
    });

  return pCount === yCount;
}
