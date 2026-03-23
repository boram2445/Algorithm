class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  append(data) {
    const newNode = new Node(data);

    // 빈 리스트일 경우도 고려필요
    if (!this.head) {
      this.head = newNode;
    }

    let cur = this.head;

    while (cur.next !== null) {
      cur = cur.next;
    }

    cur.next = newNode;
  }

  printAll() {
    let cur = this.head;

    while (cur !== null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }
}

const sampleNode = new Node(3);
console.log(sampleNode);

const list = new LinkedList(3);
list.append(6);
list.append(7);
list.append(12);

list.printAll();
