# Assignment: Scores and Grades

# Write a function that generates ten scores between 60 and 100. 
# Each time a score is generated, your function should display what the grade 
# is for a particular score. 

# Here is the grade table:

    # Score: 60 - 69; Grade - D
    # Score: 70 - 79; Grade - C
    # Score: 80 - 89; Grade - B
    # Score: 90 - 100; Grade - A

import random

def scoreAndGrade():
    grade = ''

    print 'Scores and Grades'

    for num in range(0,10):
        score = random.randint(60,101)
        if score <= 69 and score >= 60:
            grade = 'D'
        elif score <= 79 and score >= 70:
            grade = 'C'
        elif score <= 89 and score >= 80:
            grade = 'B'
        elif score <= 100 and score >= 90:
            grade = 'A'
        
        print 'Score: {}; Your grade is {}'.format(score,grade)

    print 'End of the program. Bye!'

scoreAndGrade()