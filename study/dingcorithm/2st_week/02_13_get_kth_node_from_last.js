// 🔁 복습 필요 (3/26)(3/30)

class LinkedListKthFromLast {
  constructor(value) {
    this.head = new LinkedListKthFromLast.Node(value);
  }

  append(value) {
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = new LinkedListKthFromLast.Node(value);
  }

  getKthNodeFromLast(k) {
    let cur = this.head;
    let cur_index = 1;
    let whole_len = 0;

    // 전체 길이를 구하기
    // k번째
    // 15323
    // 전체 길이 5 끝에서 2 => 2 앞에서 4번째 5-2+1 = 4
    // 전체 길이 5 끝에서 4 => 5 앞에서 2번째 5-4+1 = 2
    // 그런데 현재 전체 길이를 모름

    while (cur !== null) {
      cur = cur.next;
      whole_len += 1;
    }

    cur = this.head;

    while (cur !== null) {
      if (cur_index === whole_len - k + 1) {
        return cur;
      }
      cur_index += 1;
      cur = cur.next;
    }
  }
}

// Define Node as a static property of LinkedListKthFromLast
LinkedListKthFromLast.Node = class {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

// Main execution
const linkedList = new LinkedListKthFromLast(6);
linkedList.append(7);
linkedList.append(8);
linkedList.append(4);
linkedList.append(2);

console.log(linkedList.getKthNodeFromLast(2).data); // 8이 나와야 합니다!
