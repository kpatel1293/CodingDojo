// Print Low, Return High

// Create a function that takes array of numbers.
// The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr)
{
    var min = arr[arr.length-1];
    var max = 0;

    for(var i = 0; i < arr.length; i++)
    {
        if(min > arr[i])
        {
            min = arr[i];
        }

        if(max < arr[i])
        {
            max = arr[i];
        }
    }

    console.log(min);
    return max;
}

console.log(lowHigh([32,2,4,59,92,1]));