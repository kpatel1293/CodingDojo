// Twelve-Bar Blues
// Write a function that console.logs the number 1, 
// then "chick", then "boom", then "chick", then 2, then "chick",
// then "boom", then "chick" -
// continuing the same cycle for each number up to (including) 12.

function bar()
{
    for (var i = 1; i <= 12; i++) 
    {
        console.log(i);
        console.log("chick");
        console.log("boom")
        console.log("chick");
    }
}

bar();