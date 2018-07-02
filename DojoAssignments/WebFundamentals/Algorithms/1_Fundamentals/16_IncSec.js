// Increment the Seconds

// Given an array of numbers arr, add 1 to every second element,
// specifically those whose index is odd (arr[1], [3], [5], etc).
// Afterward, console.log each array value and return arr.

function incSec(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(i % 2 !== 0)
        {
            arr[i] += 1;
        }

        console.log(arr[i]);
    }

    return arr;
}

console.log(incSec([4,2,6,4,2,4,1,1,3,4,5,1,3]));