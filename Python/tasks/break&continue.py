for i in range(12):
 if(i == 10):
     break
 print("4 X", i+1, "=", 4 * (i +1))

for i in range(12):
 if(i == 10):
   print("skip the iteration")
   continue
print("4 X", i+1, "=", 4 * (i +1))

for  i in [2,3,4,6,8,0]:
  if (i%2!=0):
    continue
  print(i)

i = 0
while True:
  print(i)
  i = i + 1
  if(i%10 == 0):
    break
   