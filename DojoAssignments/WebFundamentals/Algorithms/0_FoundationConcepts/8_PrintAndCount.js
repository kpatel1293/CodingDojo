// Print and Count

// Print all integer multiples of 5, from 512 to 4096.
// Afterward, also log how many there were.

function printCount()
{
    var count = 0;

    //...print all int mult by 5 (512 - 4096)
    for(var i = 512; i < 4096; i++)
    {
        if(i % 5 == 0)
        {
            console.log(i);
            count++;
        }
    }

    //...print number mult by 5
    console.log(count);
}

printCount();