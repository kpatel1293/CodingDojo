# Assignment: Find Characters

# Write a program that takes a list of strings and a string containing 
# a single character, and prints a new list of all the strings containing 
# that character.

# Here's an example:

# input
word_list = ['hello','world','my','name','is','Anna']
char = 'o'
# output
# new_list = ['hello','world']

# Hint: how many loops will you need to complete this task?

def findChar(wordList, char):
    new_list = []

    for i in wordList:
        if i.count(char) > 0:
            new_list.append(i)
        else:
            continue
    
    print new_list

findChar(word_list, char)