class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    def push(self, value):
        # 맨 앞에 데이터 넣기
        new_head = Node(value)
        new_head.next = self.head
        self.head = new_head
        return

    # pop 기능 구현
    def pop(self):
        # 맨 앞의 데이터 뽑기
        if self.is_empty():
            return "stack is empty"

        delete_head = self.head
        self.head = self.head.next
        return delete_head

    def peek(self):
        if self.is_empty():
            return "stack is empty"

        # 맨 앞의 데이터 보기
        return self.head.data

    # isEmpty 기능 구현
    def is_empty(self):
        # 스택이 비었는지 확인해주기
        return self.head is None

stack = Stack()
stack.push(4)
print(stack.head.data)

stack.push(3)
print(stack.peek())

stack.push(5)
print(stack.peek())