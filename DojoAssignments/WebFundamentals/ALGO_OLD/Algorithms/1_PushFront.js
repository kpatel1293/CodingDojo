// Array: Push Front

// Given an array and an additional value, insert this value at
// the beginning of the array.
// Do this without using any built-in array methods.

function pushFront(arr, num) 
{
    for(var i = arr.length; i > 0; i--)
    {
        arr[i] = arr[i-1];
    }

    arr[0] = num;

    return arr;
}

console.log(pushFront([1,3,59,28,48,26],5));