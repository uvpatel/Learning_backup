from tkinter import *

root = Tk()

# creating a lable widget
mylable = Label(root,text='Hello world',height=10,width=10,bg='lightblue', fg='black', font=('calibiri', 12, 'bold'),anchor='center', justify='center')
# showing widget
mylable.pack()
root.resizable(True, True)
root.mainloop()