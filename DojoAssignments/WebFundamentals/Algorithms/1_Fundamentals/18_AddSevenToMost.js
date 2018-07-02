// Add Seven to Most

// Build function that accepts array.
// Return a new array with all values except first,
// adding 7 to each. Do not alter the original array.

function sevenMost(arr) 
{
    var newArr = [];
    
    for(var i = 1; i < arr.length; i++)
    {
        newArr.push(arr[i] + 7);
    }   

    return newArr;
}

console.log(sevenMost([2,4,3,1,5,6,9,12,13]));