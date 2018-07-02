#Assignment: Coin Tosses

# Write a function that simulates tossing a coin 5,000 times. 
# Your function should print how many times the head/tail appears.

# Sample output should be like the following:

    # Starting the program...
    # Attempt #1: Throwing a coin... It's a head! ... Got 1 head(s) so far and 0 tail(s) so far
    # Attempt #2: Throwing a coin... It's a head! ... Got 2 head(s) so far and 0 tail(s) so far
    # Attempt #3: Throwing a coin... It's a tail! ... Got 2 head(s) so far and 1 tail(s) so far
    # Attempt #4: Throwing a coin... It's a head! ... Got 3 head(s) so far and 1 tail(s) so far
    # ...
    # Attempt #5000: Throwing a coin... It's a head! ... Got 2412 head(s) so far and 2588 tail(s) so far
    # Ending the program, thank you!    

# Number of outcomes in the event / Total number of possible outcomes

import random

def coinToss(reps):
    head = 0
    tail = 0
    c = ''
    for num in range(1,reps+1):
        coin = random.randint(0,1)
        if coin == 0:
            c = 'head'
            head += 1
        elif coin == 1:
            c = 'tail'
            tail += 1
        
        print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(num,c,head,tail)


coinToss(5000)