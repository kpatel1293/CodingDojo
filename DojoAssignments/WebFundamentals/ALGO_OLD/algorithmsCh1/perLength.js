// Previous Lengths

// You are passed an array containing strings. Working within that same array, 
//replace each string with a number – the length of the string at previous array index – 
// and return the array.

function previousLength(arr)
{
    for(var i = arr.length-1; i > 0; i--)
    {
        arr[i] = arr[i-1];
        arr[i] = arr[i].length;
    }

    return arr;
}

console.log(previousLength(['snow', 'earth', 'land', 'ocean', 'breezy']));