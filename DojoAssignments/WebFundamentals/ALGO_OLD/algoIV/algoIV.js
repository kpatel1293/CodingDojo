// Given an array and a value Y, count and print the number of array values greater than Y.

// function givArr(arr, Y)
// {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i] > Y)
//         {
//             console.log(arr[i]);
//             count++;
//         }
//     }

//     return "The count is = " + count;
// }

// console.log(givArr([2,4,5,6,3,1,7], 2));

// Given an array, print the max, min and average values for that array.

function arr()
{
    let x = [2,4,5,6,3,1,7];

    let min = Math.min();
    let max = 0;

    for(let i = 0; i < x.length; i++)
    {
        if(x[i] > max)
        {
            max = x[i];
        }
    }

    console.log(min);
}

arr();

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the 
//string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].


// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  
//For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
