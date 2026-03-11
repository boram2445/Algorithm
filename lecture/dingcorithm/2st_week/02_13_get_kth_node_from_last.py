class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)

    def get_kth_node_from_last(self, k):
        # 구현해보세요!
        # 끝까지 돌아간다. 몇개인지 파악해야?
        cur = self.head
        next = cur.next
        last_index = 1

        while next is not None:
            cur = next
            last_index +=1
            next = cur.next


        print('last index',last_index)
        # 뒤에서 k만큼 되돌아간다.

        result = self.head
        for i in range(last_index-k):
            result = result.next

        return result


linked_list = LinkedList(6)
linked_list.append(7)
linked_list.append(8)
linked_list.append(9)

print(linked_list.get_kth_node_from_last(2).data)  # 8이 나와야 합니다!