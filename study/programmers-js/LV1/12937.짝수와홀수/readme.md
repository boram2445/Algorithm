### 1. 문제

[프로그래머스 LV1 12937 짝수와 홀수](https://school.programmers.co.kr/learn/courses/30/lessons/12937)

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

### 2. 내 풀이

틀림
num이 음수가 될 수 있다는 조건까지 꼼꼼하게 보지 못하였다.

```js
function solution(num) {
  return num % 2 === 1 ? "Odd" : "Even";
}
```

### 3. 정답

나머지가 1이든 -1이든 있으면 Odd가 나온다.'

```js
function solution(num) {
  return num % 2 ? "Odd" : "Even";
}
```
