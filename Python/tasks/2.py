# nested conditional 
a = int(input("Enter the first number: "))
b =  int(input("Enter the second number: "))
c = int(input("Enter the third number: "))
d= int(input("Enter the fourth number: "))


if a > b:
    if a > c:
        if a>d:
            print(f"{a} is greatest")
        else:
            print(f"{d} is greatest")
    else:
        if c>d:
            print(c,"is greater")
        else:
            print(d,"is greater")
else:
    if b > c:
        if b>d:
            print(f"{b} is greatest")
        else:
            print(f"{d} is greatest")
    else:
        if c > d:
            print(c," is greater")
        else:
            print(f"{d} is greatest")