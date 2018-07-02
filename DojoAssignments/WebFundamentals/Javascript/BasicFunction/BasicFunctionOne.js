//...1
function a()
{
    return 35;
}

console.log(a());   //a() = 35

//...2
function a()
{
    return 4;
}

console.log(a() + a()); //a() = 4 | 4 + 4 = 8

//...3
function a(b)
{
    return b;
}

console.log(a(2) + a(4)); //a(2) = 2 | a(4) = 4 | 2 + 4 = 6

//...4
function a(b)
{
    console.log(b);
    return b * 3;
}

console.log(a(3));  //b = 3 & 3 * 3 = 9

//...5
function a(b)               //a(10)
{
    return b * 4;           //10 * 4 = 40
    console.log(b);
}

console.log(a(10));         // 40

//...6
function a(b)                   //a(15)
{
    if(b < 10)                  //15 < 10 - false
    {
        return 2;
    }
    else
    {
        return 4;               // 4
    }

    console.log(b);             
}

console.log(a(15));             // 4

//...7
function a(b,c)             // a(3,10)
{
    return b * c;           // 3 * 10 = 30
}

console.log(10,3);          // 10 3
console.log(a(3,10));       // 30

//...8
function a(b)
{
    for(var i = 0; i < 10; i++)
    {
        console.log(i);
    }

    return i;
}

console.log(3);             // 3
console.log(4);             // 4

//...9
function a()
{
    for(var i = 0; i < 10; i++)
    {
        i = i + 2;
        console.log(i);
    }
}

a();        // 2 5 8 11

/*
i = 0 --> i = 0 + 2 = 2         2
i = 3 --> i = 3 + 2 = 5         5
i = 6 --> i = 6 + 2 = 8         8
i = 9 --> i = 9 + 2 = 11        11
*/

//...10
function a(b,c)
{
    for(var i = b; i < c; i++)
    {
        console.log(i);
    }
    
    return b * c;
}

a(0,10);                // 0 1 2 3 4 5 6 7 8 9
console.log(a(0,10));   // 0 1 2 3 4 5 6 7 8 9      0

/*
a(0,10)
i = 0       0
i = 1       1
i = 2       2
i = 3       3
i = 4       4
i = 5       5
i = 6       6
i = 7       7
i = 8       8
i = 9       9

0 * 10 = 0
*/

//...11
function a()
{
    for(var i = 0; i < 10; i++)
    {
        for(var j = 0; j < 10; j++)
        {
            console.log(j);
        }

        console.log(i);
    }
}

// no output

//...12
function a()
{
    for(var i = 0; i < 10; i++)
    {
        for(var j = 0; j < 10; j++)
        {
            console.log(i,j);
        }

        console.log(j,i);
    }
}

//no output

//...13
z = 10;

function a()
{
    z = 15;
    console.log(z);
}

console.log(z);         // 10

//...14
z = 10;

function a()
{
    z = 15;
    console.log(z);
}

a();                // 15
console.log(z);     // 15

//...15
z = 10;

function a()
{
    z = 15;
    console.log(z);
    return z;
}

z = a();            // 15
console.log(z);     // 15