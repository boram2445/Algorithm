# 완전탐색 - 자리수로 완전탐색
# 0 이상의 정수 N을 2진법으로 나타낸 뒤, 그 숫자들 중 정확히 한 숫자만을 바꾼 숫자 a가 주어졌을 때, 가능한 숫자 N 중 최댓값을 찾는 프로그램을 작성해보세요.
arr = list(map(int, input()))
length = len(arr)


flag = 0
# 0이 있을 경우
for i in range(length):
    if arr[i] == 0:
        arr[i] = 1
        flag = 1
        break

# 0이 없을 경우
if flag == 0:
    arr[length-1] = 0
res = 0
for i in range(length):
    res += arr[i] * (2 ** (length-1-i))

print(res)

# import sys

# INT_MIN = -sys.maxsize

# binary = list(map(int, list(input())))
# length = len(binary)

# ans = INT_MIN
# for i in range(length):
#     binary[i] = 1 - binary[i] #이렇게1과 0을 바꿀 수 있구나
#     #십진수로 변환
#     num = 0
#     for j in range(length):
#         num = num * 2 + binary[j] #십진수 변환 방법 (2진수 변환시 나누고 나머지를 빼줬으니까!)

#     ans = max(ans, num)
#     binary[i] = 1-binary[i]

# print(ans)
