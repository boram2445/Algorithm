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

  getNode(index) {
    let cur = this.head;
    let count = 1;

    while (cur !== null && count < index) {
      cur = cur.next;
      count += 1;
    }

    return cur;
  }
}

// ===================================

// 중복되는 로직은 별도 함수로 빼자
function get_single_linked_list_sum(linked_list) {
  let cur = linked_list.head;
  let sum = 0;

  while (cur !== null) {
    sum = sum * 10 + cur.data;
    cur = cur.next;
  }

  return sum;
}

function get_linked_list_sum(linked_list_1, linked_list_2) {
  return (
    get_single_linked_list_sum(linked_list_1) +
    get_single_linked_list_sum(linked_list_2)
  );
}

const linked_list_1 = new LinkedList(6);
linked_list_1.append(7);
linked_list_1.append(8);

const linked_list_2 = new LinkedList(3);
linked_list_2.append(5);
linked_list_2.append(4);

console.log(get_linked_list_sum(linked_list_1, linked_list_2));
