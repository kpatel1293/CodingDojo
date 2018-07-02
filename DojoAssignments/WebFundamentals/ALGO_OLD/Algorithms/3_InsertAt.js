// Array: Insert At

// Given an array, index, and additional value, insert
// the value into the array at given index.
// Do this without using built-in array methods. You can 
// think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).

function InsertAt(arr, index, num) 
{
    for(var i = arr.length; i > index; i--)
    {
        arr[i] = arr[i-1];
    }

    arr[index] = num;

    return arr;
}

console.log(InsertAt([1,3,59,28,48,26],1,6));