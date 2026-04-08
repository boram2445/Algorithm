class MaxHeap:
    def __init__(self):
        self.items = [None]

    def insert(self, value):
        # 1. 맨 위에다 원소를 넣는다
        # 2. 부모와 비교해서 자기가 높으면 바꾼다
        # 3. 2의 과정을 부모가 더 크거나 루트 노드에 달했을때까지 반복한다.

        self.items.append(value)
        cur_index = len(self.items) - 1
        while cur_index!= 1:
            parent_index = cur_index // 2
            if self.items[parent_index] < value:
                self.items[parent_index], self.items[cur_index] = self.items[cur_index], self.items[parent_index]
                cur_index = parent_index
            else:
                break

        return


max_heap = MaxHeap()
max_heap.insert(3)
max_heap.insert(4)
max_heap.insert(2)
max_heap.insert(9)
print(max_heap.items)  # [None, 9, 4, 2, 3] 가 출력되어야 합니다!


# [None, 3]
