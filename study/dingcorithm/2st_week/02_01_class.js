class Person {
  constructor(nameParam) {
    this.name = nameParam;
  }

  talk() {
    console.log("안녕하세요 저는 " + this.name + "입니다.");
  }
}

const person1 = new Person("유재석");
person1.talk();

const person2 = new Person("박명수");
person2.talk();
