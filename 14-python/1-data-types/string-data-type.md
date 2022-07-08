# Strings in Python

Weird things:
ranges don't throw errors

```py
a = "test"
print(a[17]) # => IndexError: string index out of range
print(a[17:]) # => ''
```

## string methods

.upper()
.lower()
.isupper()
.islower()
.startswith("str")
.endswith("str")
.split()
.split('char')
.join()

note: Python has join on String rather than Array
.join(array)

```py
shopping_list = ['bread','milk','eggs']
print(','.join(shopping_list))

# bread, milk, eggs
```

### extra methods

'test'.isalpha() # True
'test5'.isalpha() # False
.isalnum() # is letters and numbers
.isdecimal()
.isspace() # is space, tab, or newline
.istitle() # only words that begin with uppercase followed by lower case

## String Formatting

.format()

```py
first_name = "Billy"
last_name = "Bob"
print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob
```

f-string

```py
print(f'Your name is {first_name} {last_name}')
```

Comma as thousands separator

```py
print('{:,}'.format(1234567890))
```

Date and Time

```py
d = datetime.datetime(2020, 7, 4, 12, 15, 58)
print('{:%Y-%m-%d %H:%M:%S}'.format(d))
```

Percentage

```py
points = 190
total = 220
print('Correct answers: {:.2%}'.format(points/total))
```

Data Table

```py
width=8
print(' decimal      hex   binary')
print('-'*27)
for num in range(1,16):
    for base in 'dXb':
        print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')
    print()
```
