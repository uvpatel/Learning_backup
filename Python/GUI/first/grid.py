from tkinter import *

root = Tk()

# creating a lable widget
mylable = Label(root,text='Hello world',height=10,width=10,bg='lightblue', fg='black', font=('calibiri', 12, 'bold'),anchor='center', justify='center').grid(column=0,row=1)
mylable2 = Label(root,text='My Name is Patel Urvil, Ya know!',height=10,width=10,bg='lightblue', fg='black', font=('calibiri', 12, 'bold'),anchor='center', justify='center').grid(column=0,row=2)
# showing widget

# mylable.grid(column=0,row=1)
# mylable2.grid(column=0,row=2)
# root.resizable(True, True)

root.mainloop()

