class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


node = Node(3)
print(node.data, node.next)


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

# LinkedList의 가장 끝에 있는 노드에 새로운 노드를 연결해줘
    def append(self, value):
        cur = self.head

        while cur.next is not None:
            cur = cur.next

        cur.next = Node(value)

# LinkedList에서 저장한 head를 따라가면서 현재 있는 노드들을 전부 출력하는 함수
    def print_all(self):
        cur = self.head

        while cur is not None:
            print(cur.data)
            cur = cur.next
