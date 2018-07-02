// Swap Toward the Center

// Given array, swap first and last, third and third-tolast, etc.
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swap(arr) 
{
    var temp = 0;

    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    temp = arr[2];
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = temp;

    return arr;
}

console.log(swap([true,42,"Ada",2,"pizza"]));
console.log(swap([1,2,3,4,5,6]));