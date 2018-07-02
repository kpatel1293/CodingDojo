// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values
// is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function hungry(arr)
{
    var count = 0;

    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] == 'food')
        {
            console.log('yummy');
            count++;
        }
    }
    
    if(count == 0)
    {
        console.log('I\'m hungry');
    }

    return arr;
}

console.log(hungry(['food', 'yum', 'snack']));
console.log(hungry(['whole food', 'yum', 'snack']));