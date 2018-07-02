// Sum to One Digit

// Kaitlin sees beauty in numbers, but also believes that less is more.
// Implement sumToOne(num) that sums a given integer's digits repeatedly
// until the sum is only one digit. Return that one-digit result.

// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

function sumToOne(num) 
{
    var sum = 0;
    var arr = [];

    arr.push(num);
    arr = arr.toString().split('');

    for(var i = 0; i < arr.length; i++)
    {
        sum += parseInt(arr[i]);
    }

    while(arr.length != 1)
    {
        return sumToOne(sum);
    }

    return sum;
}

console.log(sumToOne(928));