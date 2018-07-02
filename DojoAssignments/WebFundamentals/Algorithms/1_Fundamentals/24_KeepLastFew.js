// Only Keep the Last Few

// Stan learned something today: that reducing an array’s .length
// immediately shortens it by that amount. Given array arr
// and number X, remove all except the last X elements, and
// return arr (changed and shorter). Given ([2,4,6,8,10],3),
// change the given array to [6,8,10] and return it.

function revArr(arr)
{
    var temp = 0;

    for(var i = 0; i < Math.floor(arr.length / 2); i++)
    {
        temp = arr[i];
        arr[i] = arr[(arr.length-1) - i];
        arr[(arr.length-1) - i] = temp;
    }
}

function keepFew(arr, num) 
{
    revArr(arr);

    for(var i = 0; i < num-1; i++)
    {
        arr.pop();
    }

    revArr(arr);

    return arr;
}

console.log(keepFew([2,4,6,8,10],3));