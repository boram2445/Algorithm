## 1. 문제

### **문제 설명**

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

### 제한 조건

- s의 길이는 1 이상 5이하입니다.
- s의 맨앞에는 부호(+, -)가 올 수 있습니다.
- s는 부호와 숫자로만 이루어져있습니다.
- s는 "0"으로 시작하지 않습니다.

### 입출력 예

예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

## 2. 내가 한 풀이

`맞춤`

- 문자열이 정수라는 조건이 없기 때문에, parseInt 대신 Number()를 쓰는게 옳을 것 같기도 하다.

```js
function solution(s) {
  var answer = parseInt(s);
  return answer;
}
```

## 3. 다른 사람 풀이

- 자바스크립트에서 문자열과 숫자의 사칙연산은, 숫자가 나오게 된다.

```js
function strToInt(str) {
  return str / 1;
}

function strToInt(str) {
  return +str;
}
```

## 4. 배운점

- 전역객체 함수 praseInt 는 문자열을 숫자 정수로 변환한다. ⇒ 내장객체 복습 필요

```js
console.log(parseInt("-12.3")); //문자열 -> 숫자 정수 -12
```

- parseInt()와 Number()의 차이
  [참고 블로그](https://velog.io/@blackwidow/parseInt%EC%99%80-Number%EC%9D%98-%EC%B0%A8%EC%9D%B4)
  - parseInt() : 문자열로 된 부분엥서 숫자(정수)만 뽑아서 변환해준다.
  - Number() : 문자열 전체가 숫자일때만, 소숫점까지 숫자타입으로 가져와준다. (parseFloat()와 비슷한듯 하다.)
