# n=4
# for i in range(1,n+1):
#     start=64
#     for j in range(1,i+1):
#         print(f'{j+start}',end='  ')
#     print()


# n = 4
# for i in range(1, n + 1):
#     start = 64  
#     for j in range(1, i + 1):
#         print(chr(j + start), end='  ') 
#     print()

# n=4
# start=64
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         val=chr(j+start)
#         print(f'{val}',end=' ')
#     start=ord(val)
#     print()


n=4
start=0
for i in range(1,n+1):
    for j in range(1,i+1):
        val=(j+start)
        print(val,end=' ')
    start=(val)
    print()