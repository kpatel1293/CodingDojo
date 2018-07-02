// Values Greater than Second, Generalized

// Write a function that accepts any array, and
// returns a new array with the array values that are greater than its 2nd value.
// Print how many values this is. What will you do if the array is only one element long?

function valGreaterSec(arr) 
{
    var count = 0;      //count how many values
    var newArr = [];    //new array

    //If array only has one element
    if(arr.length == 1)
    {
        return 'This array is too short!';
    }

    for(var i = 0; i < arr.length; i++)
    {
        if(arr[1] < arr[i])
        {
            newArr.push(arr[i]);
            count++;
        }
    }

    console.log('There are ' + count);
    return newArr;
}

console.log(valGreaterSec([1,3,5,7,9,13]));