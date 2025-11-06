#wap to check whether agiven number is armstrong or not
n=int(input("enter a number:"))
out=0
s=str(n)
pow=len(s)
for i in s:
    digit=int(i)
    out=out+digit**pow
if n==out:
    print("armstrong")
else:
    print("not armstrong")

