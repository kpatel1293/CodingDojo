// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). 
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num)
{   
    let sum = 0;

    for(let i = 0; i <= num; i++)
    {   
        sum += i;
    }

    return sum;
}

console.log('Sigma: ' + sigma(3));
console.log('Sigma: ' + sigma(5));

// Factorial
// Write a function factorial(num) that, given a number, returns the product (multiplication)
// of all positive integers from 1 up to number (inclusive).
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num)
{
    let mult = 1;

    for(let i = 1; i <= num; i++)
    {
        mult *= i;
    }

    return mult;
}

console.log('Factorial: ' + factorial(3));
console.log('Factorial: ' + factorial(5));

// Fibonacci 
// Create a function to generate Fibonacci numbers. 
// In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. 
// Your function should accept one argument, an index into the sequence
// (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1),
// fibonacci(3) = 2 (fib(1) + fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5),
// fibonacci(7) = 13 (5+8).  Do this without using recursion first.
// If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(num)
{
    let one = 0;
    let two = 1;
    let temp = 1;

    for(var i = 2; i <= num; i++) {
        temp = one + two;
        one = two;
        two = temp;
    }

    return temp;
}

console.log(fibonacci(4));

//Recursion
function fib(n)
{
    if(n == 0 || n == 1)
    {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(8));

// Array: Second-to-Last: Return the second-to-last element of an array. 
//Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function arrSec(arr)
{
    if(arr.length <= 2)
    {
        return null;
    }
    {
        return arr[arr.length-2];
    }
}

console.log(arrSec([42, true, 4, "Liam", 7]));

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  
// Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function arrN(arr, n)
{
    if(arr.length <= 2)
    {
        return null;
    }
    {
        return arr[arr.length-n];
    }
}

console.log(arrN([5,2,3,6,4,9,7],3));

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  
// If the array is too short, return null.

function secLar(arr)
{
    let max = 0;
    let maxTwo = 0;

    if(arr.length <= 2)
    {
        return null;
    }
    {
        for(let j = 0; j < arr.length; j++)
        {
            if(max < arr[j])
            {
                max = arr[j];
            }
        }

        for(let k = 0; k < arr.length; k++)
        {
            if(max > arr[k] && maxTwo < arr[k])
            {
                maxTwo = arr[k];
            }
        }
        
        return maxTwo;
    }
}

console.log(secLar([42,1,4,3.14,7]));

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(arr)
{
    for(let l = 0; l < arr.length; l++)
    {
        arr.splice(l, 0, arr[l]);
        l++;
    }

    return arr;
}

console.log(doubleTrouble([4, "Ulysses", 42, false]));