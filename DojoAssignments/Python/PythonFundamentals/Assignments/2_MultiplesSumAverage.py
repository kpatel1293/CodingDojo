# Assignment: Multiples, Sum, Average

# This assignment has several parts. All of your code should be in 
# one file that is well commented to indicate what each block of code 
# is doing and which problem you are solving. Don't forget to test your 
# code as you go!

#-----------------------------------------------------------------------

# Multiples

# Part I - Write code that prints all the odd numbers from 1 to 1000. 
# Use the for loop and don't use a list to do this exercise.

# For Loop numbers 1 to 1000
for count in range(1,1001):
    #Check if odd number 
    if count % 2 != 0:
        #print odd number
        print 'number is ', count

# Part II - Create another program that prints all the multiples of 5 
# from 5 to 1,000,000.

#For Loop 4 to 1,000,000
for count in range(5,1000001):
    #check if multiple of 5
    if count % 5 == 0:
        #print if multiple of 5
        print count

#-----------------------------------------------------------------------

# Sum List
# Create a program that prints the sum of all the values in the list: 
# a = [1, 2, 5, 10, 255, 3]

#declare list
a = [1,2,5,10,255,3]
s = 0

#iterate through the list
for i in a:
    s += i

#print sum of the list
print s

#-----------------------------------------------------------------------

# Average List
# Create a program that prints the average of the values in the list: 
# a = [1, 2, 5, 10, 255, 3]

#declare list
a = [1,2,5,10,255,3]
s = 0

#iterate through the list
for i in a:
    s += i

#print sum of the list
print s/len(a)