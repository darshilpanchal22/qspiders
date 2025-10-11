#lcm
# a=int(input("enter  first num:"))
# b=int(input("enter second num:"))
# for i in range(1 ,a*b+1):
#     if(i%a==0) and (i%b==0):
#         print("lcm is ",i )
#         break   
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

maximum = max(a, b)
minimum = min(a, b)

for i in range(maximum, a * b + 1, maximum):
    if i % minimum == 0:
        print(f"LCM of {a} and {b} is {i}")
        break
