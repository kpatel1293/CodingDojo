// Generate Coin Change
// Change is inevitable (especially when you break a
// twenty!). Make generateCoinChange(cents). 
// Accept a number of American cents, compute and
// print how to represent that amount with the smallest
// number of coins possible. Common American
// coins are penny (1 cent), nickel (5 cents),
// dime (10 cents) and quarter (25 cents).

// Example: Given generateCoinChange(94):

function generateCoinChange(num)
{
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;

    while(num >= 25)
    {
        num -= 25;
        quarter++;
    }

    console.log('Quarter: ' + quarter);

    while(num >= 10)
    {
        num -= 10;
        dime++;
    }

    console.log('Dime: ' + dime);

    while(num >= 5)
    {
        num -= 5;
        nickel++;
    }

    console.log('Nickel: ' + nickel);

    while(num >= 1)
    {
        num -= 1;
        penny++;
    }

    console.log('Pennies: ' + penny);
}

generateCoinChange(94);