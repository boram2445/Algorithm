## 1. 문제

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

### 제한사항

- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

## 2. 내가한 풀이

```js
	function solution(s){
	let pCount = 0;
	let yCount = 0;
	s.toLowerCase().split('').forEach((item)=>{
	if(item === 'p')pCount+=1;
	else if(item === 'y')yCount+=1;
	})
```

## 3. 다른 사람 풀이

- split에 separator줘서 나누면 리턴되는 배열의 길이는 일치되는 개수 + 1

p/P/oooyY pPooo/y/Y

```js
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
```

## 4. 배운점

### 1) str.match(’찾을 단어’)

- match() 함수는 특정 텍스트 안에 **검색할 단어**,  **찾고 싶은 단어**가 있는경우 해당 텍스트가 문구에 포함되어 있는지 확인할 수 있습니다. 또한 단어뿐만 아니라 **정규표현식**을 사용하여 특정 패턴을 검색하는 것 역시 가능하다.
- match() 함수는 인자에 포함된 문자를 찾으면 이를 반환한다.

```js
var str = "red is impressive.";

str.match("red"); //red가 있으므로 red를 출력함

//따라서 아래처럼 if문 조건으로 활용이 가능하다.
if (str.match("red") === "red") {
  console.log("Okay");
}
```

- 정규표현식을 이용가능하다.
  - 표현식 뒤에 있는 `gi`는 대소문자 구분을 허용하지 않고 모든 패턴을 검색하기 위함입니다
  - 실행결과 일치하는 문자열은 배열로 저장된다.
  - 결과가 없을때는 null이 반환된다.

```js
var test = "love you. love me. love everything!";
var regExp = /love/gi;

test2 = test.match(regExp); //['love', 'love', 'love']
// test2변수에 배열로 모든 love 텍스트가 저장됨
```
