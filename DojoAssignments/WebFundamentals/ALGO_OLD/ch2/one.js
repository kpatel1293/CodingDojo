// Swap String For Array Negative Values
// Given an array of numbers, replace any negative values with the string 'Dojo'.

function alg(arr)
{
    for (var i = 0; i < arr.length; i++) 
    {  
        if(arr[i] < 0)
        {
            arr[i] = 'Dojo';
        }
    }

    console.log(arr);
}

alg([32,43,2,4,6,3,75,-33]);