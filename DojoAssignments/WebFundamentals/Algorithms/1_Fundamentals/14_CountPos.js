// Count Positives

// Given array of numbers, create function to replace last value with number of positive values.

// Example: countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr)
{
    arr[arr.length-1] = Math.floor(Math.random() * (10 - 0)) + 0;

    return arr;
}

console.log(countPositives([-1,1,1,1]));