## 1. 문제

- 상태 : 스스로 품
- 난이도 : ⭐

### **문제 설명**

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

### 제한 사항

- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

### 입출력 예

| s                 | return            |
| ----------------- | ----------------- |
| "try hello world" | "TrY HeLlO WoRlD" |

## 2. 내 풀이

- 이렇게 2중 for문 보다 빠른 방법이 있을거라고 생각했는데, 해결하지 못해서 이렇게 일단 풀었다.
- 프로그래머스 다른 사람들 풀이는 코드를 짧게만 줄이려고 해서 가독성이 똥이다,, 그냥 답이 있으면 좋겠다.

```jsx
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
```

## 3. 다른 사람 풀이

- 처음에는 이렇게 하고 싶었다! 그러다가 i랑 num이 뭘하는건지 헷갈려서 포기했다. 반드시 명확하게 생각한 후에 풀어야겠다.

```jsx
function toWeirdCase(s){
  var result = "";
  var num = 0;

  for(var i = 0; i < s.length; i++){ //i로 len길이 만큼 반복
   if(s.charAt(i) == " "){
    num = 0;
    result += " ";
    continue;
   }
    else if(num % 2 == 0){ //num으로 인덱스 홀짝 판별
      result += (s.charAt(i)).toUpperCase();
      num++;
    }
    else{
      result += (s.charAt(i)).toLowerCase();
      num++;
    }
  }
```
