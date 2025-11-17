# for i in range(5):
#     for j in range(5):
#         if(i==0 or i==4)or(j==0 or j==4):
#             print("*",end=" ")
#         else:
#             print(" ",end=" ")
#     print()

# n=4
# a=65
# for i in range(1,n+1):
#     for j in range(1,i):
#         print(" ",end=" ")
#     for k in range(i,n+1):
#         ch=chr(a)
#         a+=1
#         print(ch,end=" ")
#     print()

# n=5
# for i in range(1,n+1):
#     for j in  range(1,n+1):
#         if i ==1 or j == 5 or j == 1 or j==5:
#             print()
t='abcaababbb'
out=''
count=1
i=0
while i<len(t)-1:
    if  t[i]==t[i+1]:
        count+=1
    else:
        out=t[i]+str(count)
    i=i+1
print(out)