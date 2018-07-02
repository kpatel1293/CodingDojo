// Generate Coin Change

// Change is inevitable (especially when you break a twenty!). Make generateCoinChange(cents).
// Accept a number of American cents, compute and print how to represent that amount with the
// smallest number of coins possible. Common American coins are penny (1 cent), nickel (5 cents),
// dime (10 cents) and quarter (25 cents).

// Example: Given generateCoinChange(94):

// 94 cents can be represented by:

// quarters:	3
// dimes	1
// nickels:	1
// pennies:	4

// Second: Can you simplify/shorten your code?

// Third: Add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional
// characters or less

function generateCoinChange(money) 
{
    var q = 0;
    var d = 0;
    var n = 0;
    var p = 0;

    for(var i = money; i > 0; i--)
    {
        if(money >= 50)
        {
            q = 1;
        }
        else if(money >= 100)
        {
            q = 3;
        }

        if(money >= 25)
        {
            money -= 25;
            q++;
        }
        else
        {
            if(money >= 10)
            {
                money -= 10;
                d++;
            }
            else
            {
                if(money >= 5)
                {
                    money -= 5;
                    n++;
                }
                else
                {
                    if(money >= 1)
                    {
                        money -= 1;
                        p++;
                    }
                }
            }
        }
    }

    return 'Quarter: ' + q + ' Dime: ' + d + ' Nickel: ' + n + ' Penny: ' + p;
}

console.log(generateCoinChange(94));