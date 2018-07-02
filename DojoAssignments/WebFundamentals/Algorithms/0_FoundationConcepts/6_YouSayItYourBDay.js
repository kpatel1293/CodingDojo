// You Say It’s Your Birthday

// If 2 given numbers represent your birth month and day in either order,
// log "How did you know?", else log "Just another day....",

// Example: given yourBirthday(4,19) or yourBirthday(19,4)

function yourBirthday(numOne, numTwo)
{
    var month = 4;
    var day = 22;

    //...if represents birthday
    if((numOne == month && numTwo == day) || (numTwo == month && numOne == day))
    {
        console.log('How did you know?');
    }
    //...else not birthday
    else
    {
        console.log('Just another day....');
    }
}

yourBirthday(4,22);
yourBirthday(22,4);
yourBirthday(4,19);