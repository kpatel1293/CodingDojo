# Assignment: Stars

# Write the following functions.

# Part I

# Create a function called draw_stars() that takes a list of numbers 
# and prints out *.

def draw_stars(arr):
    strStar = ''
    for num in arr:
        for n in range(0,num):
            strStar += '*'
        print strStar
        strStar = ''

x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)

# Part II

# Modify the function above. Allow a list containing integers and 
# strings to be passed to the draw_stars() function. When a string is passed, 
# instead of displaying *, display the first letter of the string according 
# to the example below. You may use the .lower() string method for this part.

def draw_starsII(arr):
    strStar = ''
    strLength = 0
    firstLetter = 0
    for num in arr:
        if type(num) == int:
            for n in range(0,num):
                strStar += '*'
            print strStar
            strStar = ''
        else:
            strLength = len(num)
            firstLetter = num[0].lower()
            for i in range(0,strLength):
                strStar += firstLetter
            print strStar
            strStar = ''

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

draw_starsII(x)