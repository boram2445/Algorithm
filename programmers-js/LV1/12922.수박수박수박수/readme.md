## 1. 문제

- 상태 : 스스로 품!
- 난이도 :⭐

### **문제 설명**

길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

### 제한 조건

- n은 길이 10,000이하인 자연수입니다.

### 입출력 예

| n   | return     |
| --- | ---------- |
| 3   | "수박수"   |
| 4   | "수박수박" |

## 2. 내 풀이

```jsx
function solution(n) {
  let str = "";
  let count = 0;
  while (count < n) {
    str += count % 2 === 0 ? "수" : "박";
    count++;
  }
  return str;
}
```

## 3. 다른 사람 풀이

- repeat() 이라는 메서드는 처음 보는것 같다.
- n회 일단 반복하게 하고, slice로 잘라내는 방법 참신하다.

```jsx
const waterMelon = (n) => "수박".repeat(n).slice(0, n);
```

## 4. 배운 내용

- `repeat()` 메서드
  - str.repeat(반복 count)
  - **문자열을 일정하게 반복**하도록 한다.
  ```jsx
  let str = "123";
  console.log(test.repeat(3)); //123123123
  ```
