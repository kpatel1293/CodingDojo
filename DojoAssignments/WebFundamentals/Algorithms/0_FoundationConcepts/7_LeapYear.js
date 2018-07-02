// Leap Year

// Write a function that determines whether a given year is a leap year.
// If a year is divisible by four, it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.

function leapYear(year)
{
    //...divisible by four but not by 100 - leap year
    if(year % 4 == 0 && year % 100 !== 0)
    {
        console.log('Leap Year');
    }
    //...divisible by 400 - leap year
    else if(year % 400 == 0)
    {
        console.log('Leap Year');
    }
    else
    {
        console.log('Not a Leap Year');
    }
}

leapYear(2000);
leapYear(2013);
leapYear(2014);
leapYear(2015);
leapYear(2016);