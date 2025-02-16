import pyjokes

n = int(input("Enter How many jokes you want to read: "))

for i in range(n):
 print(f"\n{pyjokes.get_joke()}\n")

else:
 print("End of Programme.")