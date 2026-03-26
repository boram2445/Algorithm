class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, value):
        # 어떻게 하면 될까요?
        new_node = Node(value)

        if self.is_empty():
            self.head = new_node
            self.tail = new_node
            return

        self.tail.next = new_node
        self.tail = new_node
        return

    def dequeue(self):
        # 어떻게 하면 될까요?
        if self.is_empty():
            return "Queue is empty"

        delete_head = self.head
        self.head = self.head.next

        return delete_head

    def peek(self):
        # 어떻게 하면 될까요?
        if self.is_empty():
            return "Queue is empty"

        return self.head.data

    def is_empty(self):
        # 어떻게 하면 될까요?

        return self.head is None

queue = Queue()
queue.enqueue(4)
print(queue.peek())
queue.dequeue()
queue.enqueue(2)
print(queue.peek())
queue.dequeue()
queue.enqueue(3)
print(queue.peek())