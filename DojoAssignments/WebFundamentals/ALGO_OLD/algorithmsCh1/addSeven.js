// Add Seven to Most
// Build function that accepts array. Return a new array with all values except first, 
// adding 7 to each. Do not alter the original array.

function addSeven(arr)
{
    var newArr = [];

    for(var i = 1; i < arr.length; i++)
    {
        arr[i] = arr[i] + 7;
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(addSeven([2, 4, 3, 9, 10, 38]));