string = "Hello, world!"
letters = [ "o" ,"a", "i", "u", "e"]

found = False
for char in string:
    if char == str(letters):
        found = True
        break

if found:
    print(f"The letter '{letters}' is present in the string.")
else:
    print(f"The letter '{letters}' is not present in the string.")
