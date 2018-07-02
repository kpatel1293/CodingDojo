# Assignment: Fun with Functions

# Create a series of functions based on the below descriptions.

#------------------------------------------------------------------

# Odd/Even:

# Create a function called odd_even that counts from 1 to 2000. 
# As your loop executes have your program print the number of that 
# iteration and specify whether it's an odd or even number.

# Your program output should look like below:

# Number is 1.  This is an odd number.
# Number is 2.  This is an even number.
# Number is 3.  This is an odd number.
# ...
# Number is 2000.  This is an even number.

#*************************

#Function called odd_even
def odd_even():
    oddEven = ''    #init a variable
    for num in range(1,2001):
        if num % 2 == 0:
            oddEven = 'Even'
        if num % 2 != 0:
            oddEven = 'Odd'
        #print out result with number and if its odd or even
        print 'Number is {}. This is an {} number.'.format(num,oddEven)

#print function
odd_even()

#*************************

#------------------------------------------------------------------

# Multiply:

# Create a function called 'multiply' that iterates through each 
# value in a list (e.g. a = [2, 4, 10, 16]) and returns a list where 
# each value has been multiplied by 5.

# The function should multiply each value in the list by the second argument. 
# For example, let's say:

# a = [2,4,10,16]
# Then:

# b = multiply(a, 5)
# print b
# Should print [10, 20, 50, 80 ].

#*************************

#multiply function with parameter l as list and num as the number to multiply by
def multiply(l, num):
    n = 0
    while n != len(l):
        l[n] *= num
        n += 1
    return l

#test multiply function
a = [2,4,10,16] #list

b = multiply(a, 5)  #assign to b
print b

#*************************

#------------------------------------------------------------------

# Hacker Challenge:

# Write a function that takes the multiply function call as an argument. 
# Your new function should return the multiplied list as a two-dimensional list. 
# Each internal list should contain the 1's times the number in the original list.
# Here's an example:

#*************************

def layered_multiples(arr):
    # your code here
    new_array = []
    temp = []

    for i in arr:
        for num in range(0,i):
            temp.append(1)
        new_array.append(temp)
        temp = []

    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x

# output
# >>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]

#*************************