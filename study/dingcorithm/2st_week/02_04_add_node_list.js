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
      return;
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

  getNode(index) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count < index) {
      cur = cur.next;
      count++;
    }

    return cur;
  }

  addNode(index, data) {
    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    const prevNode = this.getNode(index - 1);
    if (!prevNode) return;

    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  deleteNode(index) {
    // index === 0 일 경우를 예외 처리한다
    const targetNode = this.getNode(index);
    if (index === 0) {
      this.head = targetNode.next;
      return;
    }

    // 이전 노드를 찾는다
    const prevNode = this.getNode(index - 1);
    // 삭제할 다음 노드와 연결한다
    const nextNode = targetNode.next;
    prevNode.next = nextNode;
  }
}

const sampleNode = new Node(3);

const list = new LinkedList(3);
list.append(6);
list.append(7);
list.append(12);

list.addNode(1, 6);
list.addNode(0, 7);
list.printAll();

console.log("---------------");
list.deleteNode(4);
list.deleteNode(0);
list.printAll();
