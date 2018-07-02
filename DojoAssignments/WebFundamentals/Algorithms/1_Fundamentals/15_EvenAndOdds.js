// Evens and Odds

// Create a function that accepts an array. Every time that array has three odd values in a row,
// print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evenAndOdd(arr)
{
    var evenCount = 0;
    var oddCount = 0;
    
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0)
        {
            evenCount++;
            oddCount = 0;
        }
        else
        {
            evenCount = 0;
            oddCount++;
        }

        if(evenCount == 3)
        {
            console.log('Even more so!');
            evenCount = 0;
        }

        if(oddCount == 3)
        {
            console.log('That’s odd!');
            oddCount = 0;
        }
    }
}

evenAndOdd([4,2,6,4,2,4,1,1,3,4,5,1,3]);