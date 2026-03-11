input = 20


def find_prime_list_under_number(number):
    # 이 부분을 채워보세요!
    prime_list = []
    # for i in range(2, number+1):
    #     flag = True #답이다
    #     for j in range(2, i):
    #         if i % j == 0:
    #             flag = False
    #             break
    #     if flag == True:
    #         result.append(i)

    # 소수들과만 비교하면 된다!! (현제 구하고 있었음)
    # n의 제곱근보다 크지 않은 어떤 소수로도 나누어 떨어지지 않는다
    for n in range(2, number+1):
        for i in prime_list:
            if i*i <= n and n % i == 0:
                break
        else:
            prime_list.append(n)
    return prime_list


result = find_prime_list_under_number(input)
print(result)