#시뮬레이션2 - 시간에 따른 위치
# A, B가 1초에 1m씩 움직입니다.
# A는 9초 동안 앞으로 움직이다가, 3초간 뒤로 오고, 다시 5초간 앞으로 움직입니다.
# B는 2초간 뒤로 갔다가, 앞으로 2초 갔다가, 1초간 뒤로 오고, 다시 12초간 앞으로 움직입니다.

# A, B가 움직임을 시작한 이후에 다시 만나게 되는 시간은 몇 초 뒤일까요?
a, b = tuple(map(int, input().split()))
arrA = [0] * 1000000
arrB = [0] * 1000000

#A 
t = 1
for i in range(a):
    direct, num = input().split()
    num = int(num)
    if direct == 'R':
        for j in range(t, t+num):
            arrA[j] = arrA[j-1]+1
    else:
        for j in range(t, t+num):
            arrA[j] = arrA[j-1]-1
    t = num+t

#개선 코드
# for _ in range(num):
#   arrA[t] = arrA[t-1]+(1 if direct == 'R' else -1)
#   t+=1
#B
t = 1
for i in range(b):
    direct, num = input().split()
    num = int(num)
    if direct == 'R':
        for j in range(t, t+num):
            arrB[j] = arrB[j-1]+1
    else:
        for j in range(t, t+num):
            arrB[j] = arrB[j-1]-1
    t = num+t

#A,B meet
meet = 0
for i in range(1, t):
    if arrA[i] == arrB[i]:
        meet = i
        break

if meet:
    print(meet)
else:
    print(-1)