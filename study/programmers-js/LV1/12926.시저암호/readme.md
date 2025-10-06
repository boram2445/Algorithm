## 1. 문제

- 상태 : 스스로 품
- 난이도 : ⭐⭐

### **문제 설명**

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 제한 조건

- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

### 입출력 예

| s       | n   | result  |
| ------- | --- | ------- |
| "AB"    | 1   | "BC"    |
| "z"     | 1   | "a"     |
| "a B z" | 4   | "e F d" |

## 2. 내 풀이

- 주어진 문자열을 돌면서, 각 문자를 아스키코드로 변환하여 해당 문자가 숫자인지, 소문자인지, 대문자인지 판별한후 조건에 맞게 변환하여 새로운 문자열로 만들어 주었다.
- 아스키코드로 변환하는 방식으로 하는것이 옳은 방식인지 고민이 들었다.
- 조건들이 많아서 처음에 헤맸는데, 차분히 종이에 적어보며 하니 해결할 수 있었다.

```jsx
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
```

## 3. 배운점

- `**str.charCodeAt(index)**` ⇒ 아스키 코드로 변환
- `**String.fromCharCode(index)**` ⇒ 아스키코드를 문자로 변환
