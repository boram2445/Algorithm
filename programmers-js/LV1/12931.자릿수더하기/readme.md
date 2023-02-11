## 1. 문제

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

### 제한사항

- N의 범위 : 100,000,000 이하의 자연수

## 2. 내 풀이

맞춤

- 사실 이렇게 쉬운 문제임에도 어떻게 풀어야 하는지 처음에는 감이 안잡혔다.
- 알고리즘 강의 듣는것에서 나온 방법이 기억나서 풀었다.
-

```js
function solution(n) {
  let answer = 0;
  let len = n.toString().length;
  for (let i = 0; i < len; i++) {
    answer += Math.floor(n / 10 ** i) % 10;
  }
  return answer;
}
```

## 3. 다른 사람 풀이

- 사실 이 풀이법도 생각했었는데, reduce에서 parseInt를 사용하면 된다는 것까지는 생각하지 못했다. ( forEact문을 또 돌리면 시간이O^2이 될것 같아서 말았다)

```js
function solution(n) {
  // 쉬운방법
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
```

## 4. 배운점

- (n + “”) 를 통해 간단하게 문자열로 만들 수 있다.
  - 자바슼크립트에서 덧셈 연산자 + 를 사용할떄, 피연산자중 어느 하나가 문자열이면 문자열이 아닌 다른 피연산자도 문자열로 타입이 변환되어 반환된다.
