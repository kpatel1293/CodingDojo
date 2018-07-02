// Poor Kenny

// Kenny tries to stay safe, but somehow everyday something
// happens. If there is a 10% chance of volcano,
// 15% chance of tsunami, 20% chance of earthquake,
// 25% chance of blizzard, and 30% chance of meteor strike,
// write function whatHappensToday() to print the outcome.

function whatHappensToday()
{
    var weather = Math.floor(Math.random() * (31 - 10)) + 10;

    if(weather == 10)
    {
        return 'chance of volcano';
    }
    else if(weather == 15)
    {
        return 'chance of tsunami';
    }
    else if(weather == 20)
    {
        return 'chance of earthquake';
    }
    else if(weather == 25)
    {
        return 'chance of blizzard';
    }
    else if(weather == 30)
    {
        return 'chance of meteor strike';
    }

    return whatHappensToday();
}

console.log(whatHappensToday());