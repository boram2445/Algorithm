#완전탐색 - 한자리를 정하여 완전탐색
#완벽한 풀이!!
import sys
MAX_VAL = sys.maxsize

n = int(input())
arr = list(map(int, input().split()))

min_val = MAX_VAL 

for i in range(n):
    sum_diff = 0 #sum_dist
    for j in range(n):
        sum_diff += arr[j] * abs(i-j)
    min_val = min(min_val, sum_diff)

print(min_val)


