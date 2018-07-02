// Multiples of Six

// Print multiples of 6 up to 60,000, using a WHILE.

function multSix()
{
    var num = 0;

    while(num != 60001)
    {
        if(num % 6 == 0)
        {
            console.log(num);
        }
        num++;
    }
}

multSix();