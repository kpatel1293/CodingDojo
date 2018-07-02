// Countdown

// Create a function that accepts a number as an input. Return a new array that counts down by one,
// from the number (as array’s ‘zero’th element) down to 0 (as the last element). How long is this array?

function Countdown(num) 
{
    var arr = [];
    var count = 0;

    for(var i = num; i >= 0; i--)
    {
        arr.push(i);
        count++;
    }

    console.log('Length of the array is ' + count); //print length of the array

    return arr;
}

console.log(Countdown(10));