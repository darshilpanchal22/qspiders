# n=int(input("start:"))
# m=int(input("end:"))
# for j in range(n,m+1):
    
    #wap to print the table of a given number
# n=int(input("enter the number:"))
# for i in range(1,10+1):
#         print(f"{n}*{i}={n*i}")
        
        #wap to print the table upto the given limits by the users:
# n=int(input("enter the number:"))
# v=int(input("enter the limit:"))
# for j in range(1,v+1):
#             for i in range(1,10+1):
#                 print(f"{j}*{i}={j*i}")
#                 print('/n')
        
#wap to extract only vowels from the given list of words.
# l=['hii','pythone','kiwi','hello','happy']
# out=[]
# for i in l:
#     for j in i:
#         if j in 'AEIOUaeiou':
#             out.append(j)
# print(out)        


# l=[12,'program',4+2j,False,'holiday',]
#output=[o,a,o,i,a,]
# out=[]
# for i in l:
#         if type(i)==str:
#             for j in i:
#                if j in "AEIOUaeiou":
#                 out.append(j)
# print(out)


#wap to get the following output
# e=[12,'program',4+2j,False,'holiday']
#output=['program':'prgrm','holiday':'hldy']
# d={}
# for i in e:
#     if type(i)==str: 
#       s=''
#     for j in i:
#             if j not in 'AEIOUaeiou':
#                 s=s+j
#                 d[i]=s
# print(d)

e=[12,'programe',4+2j,False,'holiday']
d={}
for i in e:
  if type(i)==str:
    s=""
    for j in range(0,len(i),2):
      t+=i[j]
      d[i]=t
print(d)



            

