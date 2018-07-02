// // Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  
// // Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

// function makeItBig(arr)
// {
//     for(var i = 0; i < arr.length; i++)
//     {
//         if(arr[i] > 0)
//         {
//             arr[i] = 'big';
//         }
//     }

//     return arr;
// }

// console.log(makeItBig([-1,3,5,-5]));

// // Print Low, Return High - Create a function that takes array of numbers.  
// // The function should print the lowest value in the array, and return the highest value in the array.

// function printLowRtrnHigh(arr)
// {
//     var min = arr[0];
//     var max = 0;

//     for(var i = 0; i < arr.length; i++)
//     {
//         if(min > arr[i])
//         {
//             min = arr[i];
//         }

//         if(max < arr[i])
//         {
//             max = arr[i];
//         }
//     }
    
//     console.log(min);
//     return max;
// }

// console.log(printLowRtrnHigh([-1,3,5,-5]));

// // Print One, Return Another - Build a function that takes array of numbers. 
// // The function should print second-to-last value in the array, and return first odd value in the array.

// function rtrnAnother(arr)
// {
//     var odd = 0;

//     console.log(arr[arr.length-2]);

//     for(var i = 0; i < arr.length; i++)
//     {
//         if(arr[i] % 2 !== 0)
//         {
//             odd = arr[i];
//             break;
//         }
//     }

//     return odd;
// }

// console.log(rtrnAnother([1,5,4,2,7,9]));

// // Double Vision - Given array, create a function to return a new array where each value in the original has been doubled. 
// // Calling double([1,2,3]) should return [2,4,6] without changing original.

// function double(arr)
// {
//     var newArr = [];

//     for(var i = 0; i < arr.length; i++)
//     {
//         arr[i] += arr[i];

//         newArr.push(arr[i]);
//     }

//     return newArr;
// }

// console.log(double([1,2,3]));

// // Count Positives - Given array of numbers, create function to replace last value with number of positive values. 
// // Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

// function countPositives(arr)
// {
//     var count = 0;

//     for(var i = 0; i < arr.length; i++)
//     {
//         if(arr[i] > 0)
//         {
//             count++;
//         }
//     }

//     arr[arr.length-1] = count;

//     return arr;
// }

// console.log(countPositives([-1,1,1,1]));

// // Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row,
// // print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

// function EvenOdd(arr)
// {
//     var countEven = 0;
//     var countOdd = 0;

//     for(var i = 0; i < arr.length; i++)
//     {
//         if(arr[i] % 2 === 0 && ((arr[i-1] % 2 === 0 && arr[i+1] % 2 === 0) || (arr[i-1] % 2 === 0 && arr[i-2] % 2 === 0) || (arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0)))
//         {
//             countEven++;
//         }
//         else if(arr[i] % 2 !== 0 && ((arr[i-1] % 2 !== 0 && arr[i+1] % 2 !== 0) || (arr[i-1] % 2 !== 0 && arr[i-2] % 2 !== 0) || (arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0)))
//         {
//             countOdd++;
//         }
//         else
//         {
//             countEven = 0;
//             countOdd = 0;
//         }

//         if(countEven == 3)
//         {
//             console.log("Even more so!");
//             countEven = 0;
//         }
        
//         if(countOdd == 3)
//         {
//             console.log("That's odd!");
//             countOdd = 0;
//         }
//     }
// }

// EvenOdd([3,4,2,0,3,1,3,3,5,1,8,2,4,1]);

// // Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd
// // (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

// function incSec(arr)
// {
//     for(var i = 0; i < arr.length; i++)
//     {
//         if(i % 2 !== 0)
//         {
//             arr[i] += 1;
//         }

//         console.log(arr[i]);
//     }

//     return arr;
// }

// console.log(incSec([3,4,6,3,1,4,6]));

// Previous Lengths - You are passed an array containing strings.  Working within that same array,
// replace each string with a number - the length of the string at previous array index - and return the array. 
// For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].

// var arr = ["hello", "dojo", "awesome"]; //return ["hello", 5, 4]

function previousLengths(arr)
{
    for(var i = arr.length-1; i > 0; i--)
    {
        arr[i] = arr[i-1].length;
    }

    return arr;
}

console.log(previousLengths(["hello", "dojo", "awesome"]));

// // Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each.
// // Do not alter the original array.

// function addSeven(arr)
// {
//     var newArr = [];

//     for(var i = 1; i < arr.length; i++)
//     {
//         arr[i] += 7;
        
//         newArr.push(arr[i]);
//     }

//     return newArr;
// }

// console.log(addSeven([2,4,6,5,3,1]));

// // Reverse Array - Given an array, write a function that reverses values, in-place.  
// // Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  
// // Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

// function reverse(arr)
// {
//     return arr.reverse();
// }

// console.log(reverse([3,1,6,4,2]));

// // Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array,
// // made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

// function neg(arr)
// {
//     var newArr = [];

//     for(var i = 0; i < arr.length; i++)
//     {
//         if(arr[i] > 0)
//         {
//             arr[i] *= -1;
//         }

//         newArr.push(arr[i]);
//     }

//     return newArr;
// }

// console.log(neg([1,-3,5]));

// // Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to
// // "food".  If no array elements are "food", then print "I'm hungry" once.

// function alwaysHungry(arr)
// {
//     var count = 0;

//     for(var i = 0; i < arr.length; i++)
//     {   
//         if(arr[i] == "food")
//         {
//             console.log("yummy");
//             count++;
//         }
//     }

//     if(count == 0)
//     {
//         console.log("I'm hungry");
//     }
// }

// alwaysHungry([23,"food",2,4,2,4]);

// // Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc. 
// // Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

// function Input(arr)
// {
//     var temp = 0;

//     temp = arr[0];
//     arr[0] = arr[arr.length-1];
//     arr[arr.length-1] = temp;

//     temp = arr[2];
//     arr[2] = arr[arr.length-3];
//     arr[arr.length-3] = temp;
    
//     return arr;
// }

// console.log(Input([true,42,"Ada",2,"pizza"]));
// console.log(Input([1,2,3,4,5,6]));

// // Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr. 
// // For example, scaleArray([1,2,3],3) should return [3,6,9].

// function scaleArray(arr, num)
// {
//     for(var i = 0; i < arr.length; i++)
//     {
//         arr[i] *= num;
//     }

//     return arr;
// }

// console.log(scaleArray([1,2,3], 3));