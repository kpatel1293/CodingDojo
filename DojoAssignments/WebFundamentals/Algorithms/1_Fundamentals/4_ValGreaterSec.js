// Values Greater than Second

// For [1,3,5,7,9,13], print values that are greater than its 2nd value.
// Return how many values this is.

function valGreaterSec(arr) 
{
    var count = 0; //count how many values

    for(var i = 0; i < arr.length; i++)
    {
        if(arr[1] < arr[i])
        {
            console.log(arr[i]);
            count++;
        }
    }

    console.log('There are ' + count);
}

valGreaterSec([1,3,5,7,9,13]);