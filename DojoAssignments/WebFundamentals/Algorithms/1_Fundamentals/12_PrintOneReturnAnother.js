// Print One, Return Another

// Build a function that takes array of numbers. The function should print second-to-last
// value in the array, and return first odd value in the array.

function printOneReturnAnother(arr)
{
    console.log(arr[arr.length-2]);

    var odd = 0;

    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 !== 0)
        {
            odd = arr[i];
            break; 
        }
    }

    return odd;
}

console.log(printOneReturnAnother([10,3,2,5,7,9,4,1]));