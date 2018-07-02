// What Really Happened?

// Kyle (smarter than Kenny) notes that the chance of one
// disaster is totally unrelated to the chance of another. Change
// whatHappensToday() function to create whatReallyHappensToday().
// In this new function test for each disaster independently,
// instead of assuming exactly one disaster will happen. In
// other words, with this new function, all five might occur
// today – or none. Maybe Kenny will survive!

function whatReallyHappensToday()
{
    var weather = Math.floor(Math.random() * (11 - 0)) + 0;

    if(weather == 10)
    {
        return 'chance of volcano';
    }
    
    weather = Math.floor(Math.random() * (16 - 11)) + 11;

    if(weather == 15)
    {
        return 'chance of tsunami';
    }

    weather = Math.floor(Math.random() * (21 - 16)) + 16;
    
    if(weather == 20)
    {
        return 'chance of earthquake';
    }

    weather = Math.floor(Math.random() * (26 - 21)) + 21;
    
    if(weather == 25)
    {
        return 'chance of blizzard';
    }

    weather = Math.floor(Math.random() * (31 - 26)) + 26;
    
    if(weather == 30)
    {
        return 'chance of meteor strike';
    }

    return 'Kenny Will Survive';
}

console.log(whatReallyHappensToday());