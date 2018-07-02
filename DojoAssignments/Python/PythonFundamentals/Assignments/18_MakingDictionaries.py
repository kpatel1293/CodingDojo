# Assignment: Making Dictionaries

# Create a function that takes in two lists and creates a single dictionary. 
# The first list contains keys and the second list contains the values. 
# Assume the lists will be of equal length.

# Your first function will take in two lists containing some strings. 

# Here are two example lists:
name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

# Here's some help starting your function.

def make_dict(list1, list2):
    new_dict = {}
    
    # your code here
    new_dict = zip(list1,list2)

    return dict(new_dict)

print make_dict(name,favorite_animal)

# Hacker Challenge:

# If the lists are of unequal length, the longer list should be used 
# for the keys, the shorter for the values.

def make_dict(list1, list2):
    new_dict = {}

    # your code here
    if len(list1) < len(list2):
        new_dict = zip(list2,list1)
    else:
        new_dict = zip(list1,list2)

    return dict(new_dict)

print make_dict(name,favorite_animal)





