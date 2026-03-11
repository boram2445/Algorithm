def find_max_occurred_alphabet(string):
    # 이 부분을 채워보세요!
    # result = string[0]
    # max_count = 0
    # for alpha in string:
    #     count = 0
    #     if alpha != ' ':
    #         for compare_alpha in string:
    #             if alpha == compare_alpha:
    #                     count += 1
    #             if count == max_count:
    #                 result = min(alpha, result)
    #             if count > max_count:
    #                 max_count = count
    #                 result = alpha

    alpha_count_array = find_alphabet_occurrence_array(string)
    max_count = 0
    result_index = 0
    for i in range(len(alpha_count_array)):
        if alpha_count_array[i] > max_count:
            max_count = alpha_count_array[i]
            result_index = i + ord('a')

    return chr(result_index)


def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord('a')
        alphabet_occurrence_array[arr_index] += 1

    return alphabet_occurrence_array


result = find_max_occurred_alphabet
print("정답 = i 현재 풀이 값 =", result("hello my name is dingcodingco"))
print("정답 = e 현재 풀이 값 =", result("we love algorithm"))
print("정답 = b 현재 풀이 값 =", result("best of best youtube"))