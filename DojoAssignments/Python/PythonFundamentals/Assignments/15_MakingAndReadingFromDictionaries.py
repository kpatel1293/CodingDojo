# Assignment: Making and Reading from Dictionaries

# Create a dictionary containing some information about yourself. 
# The keys should include name, age, country of birth, favorite language.

# Write a function that will print something like the following as it executes:

# My name is Anna
# My age is 101
# My country of birth is The United States
# My favorite language is Python

# There are two steps to this process, 
    # 1. building a dictionary 
    # 2. gathering all the data from it
# Write a function that can take in and print out any dictionary keys and values.

# Note: The majority of data we will manipulate as web developers will be hashed 
# in a dictionary using key-value pairs. Repeat this assignment a few times to 
# really get the hang of unpacking dictionaries, as it's a very common requirement 
# of any web application. 

def readDic(d):
    for key,data in d.iteritems():
        print 'My {} is {}'.format(key,data)

about_me = {'name' : 'Krishna', 'age': '20', 'country of birth': 'The United States', 'favorite language': 'JavaScript'}

readDic(about_me)