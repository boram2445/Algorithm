#시뮬레이션2 - dy,dx 테크닉, 되돌아오기2
# res 변수에 값을 담아주었었는데, flag변수에 boolean값을 넣어주는게 더 좋은 코드인것 같다. 
inputArr = list(input())
y, x = 0, 0
dys, dxs = [-1, 0, 1, 0], [0, 1, 0, -1]
dir_num = 0
flag, time = False, 0
for elem in inputArr:
    if elem == 'L':
        dir_num = (dir_num -1 + 4) % 4 
    elif elem == 'R':
        dir_num = (dir_num + 1) % 4 
    elif elem == 'F':
        y,x = dys[dir_num] + y, dxs[dir_num] + x
    time += 1
    if y == 0 and x == 0:
        flag = True
        break

if (flag):
    print(time)
else:
    print(-1)


