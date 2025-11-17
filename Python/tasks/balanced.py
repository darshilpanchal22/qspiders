n = int(input("enter number:"))
s = str(n)
mv = len(s) // 2    

lh = 0
rh = 0

if len(s) % 2 == 0:
    for i in range(0, mv):
        lh += int(s[i])
    for j in range(mv, len(s)):
        rh += int(s[j])
else:
    for i in range(0, mv):
        lh += int(s[i])
    for j in range(mv + 1, len(s)):
        rh += int(s[j])

if lh == rh:
    print("balanced")
else:
    print("not balanced")
