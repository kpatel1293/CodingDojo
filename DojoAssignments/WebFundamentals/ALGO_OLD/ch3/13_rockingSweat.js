// Rockin' the Dojo Sweatshirt

// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts - maybe even more than one.
// Let's say they cost $20 (including tax), but friendly Josh will give a 9% discount if you buy two,
// or a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more.
// He only accepts cash and doesn't have coins, so you have to round up to the nearest dollar.
// Build a function sweatshirtPricing(num) that, given how many sweatshirts you want, returns the cost.

//sweatshirt = $20
//if buy 2 --> 9% discount
//if buy 3 --> 19% discount
//if buy 4 or more --> 35% discount

function sweatshirtPricing(num)
{
    var sweatshirt = 20.00;
    var price = num * sweatshirt;
    var cost = 0;

    if(num == 2)
    {
        cost = price - (price * .09);
    }
    else if(num == 3)
    {
        cost = price - (price * .19);
    }
    else if(num >= 4)
    {
        cost = price - (price * .35);
    }
    else
    {
        cost = price;
    }

    return Math.ceil(cost);
}

console.log(sweatshirtPricing(2));