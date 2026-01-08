# def longest_word(a):
#     s=a.split()
#     max=len(s[0])
#     word=''
#     for i in s:
#         if len(i)>max:
#             max=len(i)
#             word=i
#     return word
# print(longest_word('python is easy tolearn'))


#check num is prime or not
def is_prime(n):
    for i in range(2, int(n)):
        if n % i == 0:
            return False
    return True

# print(is_prime(11))  # True
# print(is_prime(15))  # False

#factorial num
# n=100
# sum=0
# for i in str(n):
#     num=int(i)
#     fact=1
#     for j in range(num,0,-1):
#         fact=fact*j
#     sum+=fact
# if sum==n:
#    print('strong num')
# else:
#     print('not strong')


