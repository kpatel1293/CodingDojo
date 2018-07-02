// Print 1 to x

// Please complete the codes below to have the function print
// all the integers from 1 to x.  If x is negative, 
//have it print/log 
//"negative number' and have the function return false.

function printUpTo(x)
{
    // your code here
    if(x < 0)
    {
        console.log("negative number");
        return false;
    }
    else
    {
        for(let i = 0; i <= x; i++)
        {
            console.log(i);
        }
    }
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false