// Fit the First Value

// Your function should accept an array.
// If the value at [0] is greater than array’s length, print "Too big!"; 
// if the value at [0] is less than array’s length, print "Too small!";
// otherwise print "Just right!".

function fitFirstVal(arr) 
{
    // If the value at [0] is greater than array’s length, print "Too big!";
    if(arr[0] > arr.length)
    {
        console.log('Too big!');
    } 
    // if the value at [0] is less than array’s length, print "Too small!";
    else if(arr[0] < arr.length)
    {
        console.log('Too small!');
    }
    // otherwise print "Just right!".
    else
    {
        console.log('Just right!');
    }
}

fitFirstVal([2,1,5,6,3]);
fitFirstVal([10,11,35,6,3]);
fitFirstVal([2,3]);