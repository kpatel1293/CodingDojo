# Optional Assignment: Foo and Bar

# Write a program that prints all the prime numbers and all the perfect 
# squares for all numbers between 100 and 100000.

# For all numbers between 100 and 100000 test that number for whether 
# it is prime or a perfect square. If it is a prime number, print "Foo". 
# If it is a perfect square, print "Bar". If it is neither, print "FooBar". 
# Do not use the python math library for this exercise. For example, if the 
# number you are evaluating is 25, you will have to figure out if it is a 
# perfect square. It is, so print "Bar".

# prime numbers : 1 2 3 5 7 11 13 17 19 23 29...

# def primeNum(num):
#     count = 0

#     for i in range(1,12):
#         if(num % i == 0 and num != i):
#             count += 1
    
#     if count == 1:
#         return 'Foo'
        
def FooAndBar():
    count = 0
    num = 1
    # for e in range(100,100000):
    while(num <= 100):
        for i in range(1,12):
            if(num % i == 0 and num != i):
                count += 1
                print num
            num += 1

        # num += 1

FooAndBar()





FooAndBar()

# def primeNum(num):
#     count = 0

#     #check if prime
#     for e in range(1,100):
#         if(num % e == 0 and num != e):
#             count += 1
        
#     if count == 1:
#         print 'Foo'
    
#     # check if square
#     for e in range(1,100):
#         if(e * e == num):
#             print 'Bar'
#             break

#     if(count > 1 and e * e != num):
#         print 'FooBar'


# # primeNum(2)
# primeNum(3)
# primeNum(4)
# # primeNum(25)
# primeNum(6)
# # primeNum(7)
# primeNum(8)