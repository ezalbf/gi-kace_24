ages = [19, 26, 29]
print(type(ages))


# a list containing strings and numbers
student = ['Jack', 32, 'Computer Science']
print(student)

tr = 'Ada'
tr_list = list(tr)
print(tr_list)

gee = ['bae','val','rue']
print(gee[-1])
print(gee[0])
# femitech password= gi-kace@24

my_list = ['p', 'r', 'o', 'g', 'r', 'a', 'm']
# items from index 2 to index 4
print(my_list[2:5])

# from index 1 to 5
print(my_list[1:6])

fruits =['guava','apple', 'orange']
fruits.insert(0,'banana')
print('fruits updated: ', fruits)

numbers = [1, 3, 5]
even_numbers  = [2, 4, 6]
numbers.extend(even_numbers)

print('Updated Numbers:', numbers) 

list_er =['tame',19]
print(list_er)

names=['Akua','Serwaa','Tina','Yaa','Akos','Linda']
del names[1:3]
print(names)


#tupleee
one = ('ed','edd','eddie')
two=('you',1, 2, 3)
print(two)
print('yellow' in two)

#dictionary
capital ={
    'Ghana': 'Accra',
    'Italy': 'Rome',
    'England': 'London'
}
print(capital)
del capital['England']
print(capital)
