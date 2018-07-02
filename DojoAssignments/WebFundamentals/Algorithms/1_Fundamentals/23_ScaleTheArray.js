// Scale the Array

// Given an array arr and a number num, multiply all values
// in arr by num, and return the changed array arr.

function scaleArr(arr, num)
{
    for(var i = 0; i < arr.length; i++)
    {
        arr[i] *= num;
    }

    return arr;
}

console.log(scaleArr([2,3,5,7,4,1],3));