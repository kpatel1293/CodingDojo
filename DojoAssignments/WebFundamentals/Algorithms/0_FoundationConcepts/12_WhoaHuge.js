// Whoa, That Sucker’s Huge…

// Add odd integers from -300,000 to 300,000, and console.log the final sum.
// Is there a shortcut?

function oddSum()
{
    //...declare sum
    var sum = 0;

    //...loop -300000 to 300000
    for(var i = -300000; i <= 300000; i++)
    {
        //...check if odd
        if(i % 2 !== 0)
        {
            sum += i;
        }
    }

    //...print sum
    console.log(sum);
}

oddSum();