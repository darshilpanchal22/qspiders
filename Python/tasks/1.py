# nested conditional 
a = 3
b = 5
c = 10

if a > b:
    if a > c:
        print(f"{a} is greatest")
    else:
        print(f"{c} is greatest")
else:
    if b > c:
        print(f"{b} is greatest")
    else:
        print(f"{c} is greatest")
