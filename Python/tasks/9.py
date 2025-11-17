# wap to check weather the given number is strong num or not
n=int(input("enter the number"))
total=0
e=str(n)
for i in e:
    digits=int(i)
    fact=1
    for j in range(digits,1,-1):
        fact=fact*j
    total=total+fact
if total==n:
    print('Strong number')
else:
    print('not strong number')

    