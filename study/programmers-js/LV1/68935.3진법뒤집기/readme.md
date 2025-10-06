## 1. 문제

- 상태 : 스스로 품
- 난이도 : ⭐

### **문제 설명**

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

---

### 제한사항

- n은 1 이상 100,000,000 이하인 자연수입니다.

---

### 입출력 예

| n   | result |
| --- | ------ |
| 45  | 7      |
| 125 | 229    |

---

### 입출력 예 설명

입출력 예 #1

- 답을 도출하는 과정은 다음과 같습니다.

| n (10진법) | n (3진법) | 앞뒤 반전(3진법) | 10진법으로 표현 |
| ---------- | --------- | ---------------- | --------------- |
| 45         | 1200      | 0021             | 7               |

- 따라서 7을 return 해야 합니다.

## 2. 내 풀이

- 진법을 구하는 법을 까먹어서 날것으로 계산하다가,이렇게 진법 계산한다는 것을 깨닫고 쉽게 풀수 있었다…

<img src="https://user-images.githubusercontent.com/68495264/219868649-eafada4b-bd29-44ce-b6a9-448e82962176.png" width="300px" >

- 처음에는, while문을 이용해서 계속 나누어보아야 하나 했는데 중첩 while문으로 풀고있는 모습을 보고 다시 처음부터 접근을 해 보았다.

```jsx
function solution(n) {
  let res = "";
  while (n > 0) {
    res += n % 3;
    n = Math.floor(n / 3);
  }

  //10진법으로
  let answer = 0;
  for (let i = 0; i < res.length; i++) {
    answer += 3 ** i * res[res.length - 1 - i];
  }
  return answer;
}
```

## 3. 다른 사람 풀이

- 다른 사람 답을 보고 오잉 이게 뭔가 했다. (내 고민했던 시간은..?\_)
- JS에서는 toString과 parseInt를 통해서 진법 변환을 할 수 있다고 한다.

```jsx
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
```

## 4. 배운점

- **toString()**

  - 특정 객체를 문자열로 변환해준다. `.toString()`
  - 원하는 10진수를 특정 진수로 변환하고 싶을때 사용한다. `**.toString(특정 진수)**`

  ```jsx
  let intNum = 3;
  console.log(intNum.toString(2)); //'11' - string
  //11은 eleven이 아니고 이진수의 00011임.

  intNum = 32;
  console.log(intNum.toString(16)); //'20'
  //20은 twenty가 아니고 16진수의 00020임(2*16).
  ```

- **parseInt()**
  - 문자열을 정수로 변환한다.
  - 특정 진수를 10진수로 변환한다.
  - parseInt(’변환시키고자 하는 문자열’, **해당 수의 진수**)
  ```jsx
  let intNum = "11";
  let parsing = parseInt(intNum, 2);
  console.log(parsing); //3 - number
  ```
