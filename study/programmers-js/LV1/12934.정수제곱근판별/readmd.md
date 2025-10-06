## 1. 문제

### **문제 설명**

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

### 제한 사항

- n은 1이상, 50000000000000 이하인 양의 정수입니다.

### 입출력 예

| n   | return |
| --- | ------ |
| 121 | 144    |
| 3   | -1     |

## 2. 내 풀이

- 제곱근을 어떻게 구하는지 몰라서, Math 메소드를 찾아보았다.
- JS에서 정수인지 실수인지 체크하는 방법이 2가지가 있다는 사실을 알게 되었다.

```jsx
function solution(n) {
  let x = Math.sqrt(n);
  return x % 1 ? -1 : (x + 1) ** 2;
}
```

## 3. 배운점

### 1) JS에서 값이 정수인지 실수인지 체크하는 방법

[참고 블로그](https://hianna.tistory.com/463)

- Number.isInteger()

파라미터로 입력 받은 값이 정수인지 판별한다.

```jsx
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-10)); // true
console.log(Number.isInteger(123.1
```

- 나머지 연산자(%) 활용

정수는 1로 나누었을때 나머지가 0이 되고, 실수는 1로 나누었을때 0이 아니다는 사실을 활용한다.

```jsx
function isInteger(number) {
  return number % 1 === 0;
}

document.writeln(isInteger(10)); // true
document.writeln(isInteger(0)); // true
document.writeln(isInteger(-10)); // true
document.writeln(isInteger(123.1)); //flase
```
