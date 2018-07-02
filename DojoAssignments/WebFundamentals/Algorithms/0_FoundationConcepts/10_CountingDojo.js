// Counting, the Dojo Way

// Print integers 1 to 100. If divisible by 5, print "Coding" instead.
// If by 10, also print " Dojo".

function dojoWay() 
{
    //...loop 1 - 100
    for (var i = 1; i <= 100; i++) 
    {
        //...if divisible by 5 -> print "Coding"
        if(i % 10 == 0)
        {
            console.log('Dojo');
        }
        //...if divisible by 10 -> print "Dojo"
        else if(i % 5 == 0)
        {
            console.log('Coding');
        }
    }
}

dojoWay();