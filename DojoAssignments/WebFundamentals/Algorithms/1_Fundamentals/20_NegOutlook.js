// Negative Outlook

// Given an array, create and return a new one containing all the
// values of the provided array, made negative
// (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negOutlook(arr) 
{
    var newArr = [];
    
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        {
            arr[i] *= -1;
        }

        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(negOutlook([1,-3,5]));