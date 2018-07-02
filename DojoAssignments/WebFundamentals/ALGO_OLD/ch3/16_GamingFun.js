// Gaming Fun(damentals)
// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?

// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).
function rollOne() 
{
    return Math.floor(Math.random() * (7 - 1) + 1);
}

// Second, create a function playFives(num), which should call rollOne() multiple times
// – 'num' times, in fact, where 'num' is input parameter to playFives(num). Each time,
// it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”

function playFives(num)
{
    for(var i = 0; i < num; i++)
    {
        if(rollOne() == 5)
        {
            console.log('That’s good luck!');
        }
        console.log(rollOne());
    }
}

// Third, create a new function named playStatistics(), which should call rollOne() eight times
// (but not print anything after each call). After the last of these eight calls, it should print out the lowest
// and highest values that it received from rollOne, among those eight calls.

function playStatistics() 
{   
    var arr = [];

    for(var i = 0; i < 8; i++)
    {
        arr.push(rollOne());
    }

    var max = 0;
    var min = arr[arr.length-1];

    for(var j = 0; j < arr.length; j++)
    {
        if(max < arr[j])
        {
            max = arr[j];
        }

        if(min > arr[j])
        {
            min = arr[j];
        }
    }
    console.log('Highest: ' + max + ' & Lowest: ' + min);
}

// Fourth, make a copy of playStatistics and add code to make playStatistics2(), so that at the end
// (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.

function playStatistics2() 
{   
    var arr = [];

    for(var i = 0; i < 8; i++)
    {
        arr.push(rollOne());
    }

    var max = 0;
    var min = arr[arr.length-1];
    var sum = 0;

    for(var j = 0; j < arr.length; j++)
    {
        if(max < arr[j])
        {
            max = arr[j];
        }

        if(min > arr[j])
        {
            min = arr[j];
        }

        sum += arr[j];
    }
    console.log('Highest: ' + max + ' & Lowest: ' + min + ' & Sum: ' + sum);
}

// Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that it will roll as many
// times as you want, instead of always doing this eight times.

function playStatistics3(num) 
{   
    var arr = [];

    for(var i = 0; i < num; i++)
    {
        arr.push(rollOne());
    }

    var max = 0;
    var min = arr[arr.length-1];
    var sum = 0;

    for(var j = 0; j < arr.length; j++)
    {
        if(max < arr[j])
        {
            max = arr[j];
        }

        if(min > arr[j])
        {
            min = arr[j];
        }

        sum += arr[j];
    }
    console.log('Highest: ' + max + ' & Lowest: ' + min + ' & Sum: ' + sum);
}

// Finally, make a copy of playStatistics3 and change it to create playStatistics4(num), so that at the end
// instead of the total sum, it prints the average roll.

function playStatistics3(num) 
{   
    var arr = [];

    for(var i = 0; i < num; i++)
    {
        arr.push(rollOne());
    }

    var max = 0;
    var min = arr[arr.length-1];
    var sum = 0;

    for(var j = 0; j < arr.length; j++)
    {
        if(max < arr[j])
        {
            max = arr[j];
        }

        if(min > arr[j])
        {
            min = arr[j];
        }

        sum += arr[j];
    }

    var avg = sum / num;

    console.log('Highest: ' + max + ' & Lowest: ' + min + ' & Avg: ' + Math.floor(avg));
}