// Character Art
// From Star Art, derive the following that will accept and draw the given characters, not just asterisks:

// drawLeftChars(num, char)
// drawRightChars(num, char)
// drawCenterChar(num, char)
// For all three of these, you can safely assume that 'char' is a string with length 1.

function drawLeftStars(num, char)
{
    var arr = [];
    for(var i = 0; i < num; i++)
    {
        arr.push(char);
    }

    console.log(arr);
}

drawLeftStars(4,'K');

function drawRightStars(num,char) 
{
    var arr = [];
 
    for(var i = 0; i < 75-num; i++)
    {
        arr.push(' ');
    }

    for(var i = 0; i < num; i++)
    {
        arr.push(char);
    }

    console.log(arr);
}

drawRightStars(4,'K');

function drawCenterStars(num,char) 
{
    var left = Math.floor((75 - num)/2);
    var arr = [];
 
    for(var i = 0; i < left; i++)
    {
        arr.push(' ');
    }

    for(var i = 0; i < num; i++)
    {
        arr.push(char);
    }

    for(var i = 0; i < 75-left-num; i++)
    {
        arr.push(' ');
    }

    console.log(arr);
}

drawCenterStars(69,'K ');