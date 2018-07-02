# Assignment: Names

# Write the following function.

# Part I

# Given the following list:

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

#---------------------------------------------------------------

for name in students:
    strName = ''
    for val in name.values():
        strName += val + ' '
    print strName

#---------------------------------------------------------------

#---------------------------------------------------------------
print '----------------------------'
#---------------------------------------------------------------

# Part II

# Now, given the following dictionary:

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

num = 0
lengthStr = 0

for key,data in users.items():
    print key

    for val in data:
        num += 1
        lengthStr = len(val['first_name']) + len(val['last_name'])

        print '{} - {} {} - {}'.format(num,val['first_name'], val['last_name'],lengthStr)

    num = 0

