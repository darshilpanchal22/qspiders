#wap to find perfect number or not
n=int(input("enter a no:"))
s=0 
for i in range(1,n):
    if n%i==0:
        s=s+i
if(s==n):
    print(n,"is a perfect no")
else:
    print(n,"not a perfect no")