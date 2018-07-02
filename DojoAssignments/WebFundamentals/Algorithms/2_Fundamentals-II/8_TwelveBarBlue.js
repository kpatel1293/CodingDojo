// Twelve-Bar Blues

// Write a function that console.logs the number 1, then "chick", then "boom",
// then "chick", then 2, then "chick", then "boom", then "chick" - continuing the
// same cycle for each number up to (including) 12.

function twelve()
{   
    var num = 0;
    while(num != 13)
    {
        console.log(num);
        console.log('chick');
        console.log('boom');
        num++;
    }
}

twelve();