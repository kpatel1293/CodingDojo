# Assignment: String and List Practice

# Use only the built-in methods and functions from the previous
# tabs to do the following exercises. You will find the following
# methods and functions useful:
    # .find()
    # .replace()
    # min()
    # max()
    # .sort()
    # len()


# Find and Replace

# In this string: words = "It's thanksgiving day. It's my 
# birthday,too!" print the position of the first instance of the 
# word "day". Then create a new string where the word "day" is 
# replaced with the word "month".

words = "It\'s thanksgiving day. It\'s my birthday, too!"
print words.find("day")
newWord = words.replace("day", "month", 1)
print newWord

# Min and Max

# Print the min and max values in a list like this one: 
# x = [2,54,-2,7,12,98]. Your code should work for any list.

x = [2,54,-2,7,12,98]       #declare array(list)

def findMaxAndMin(arr):     #function to find max and min
    print min(arr)
    print max(arr)

findMaxAndMin(x)            #print max and min in the list

# First and Last

# Print the first and last values in a list like this one: 
# x = ["hello",2,54,-2,7,12,98,"world"]. Now create a new list 
# containing only the first and last values in the original list. 
# Your code should work for any list.

#...Declare list
x = ["hello",2,54,-2,7,12,98,"world"]

#...Function to find first and last value
def firstAndLast(arr):
    first = arr[0]     
    last = arr[len(arr) - 1]
    print 'First Value is ' + first + ' & Last Value is ' + last
    newArr = []
    newArr.append(first)
    newArr.append(last)
    print newArr

firstAndLast(x)     #call and print function

# New List

# Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6]. 
# Sort your list first. Then, split your list in half. Push the list 
# created from the first half to position 0 of the list created from the 
# second half. The output should be: 
# [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]. 
# Stick with it, this one is tough!

#List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
#Sort list
x.sort()
#Split the list in half
c = len(x) / 2
firstHalf = x[:c]
lastHalf = x[c:]
#Push the first half list to positon 0 to the second half list
lastHalf.insert(0, firstHalf)
#Print out new array
print lastHalf
 