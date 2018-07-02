// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts the number of degrees Celsius, and
// returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiusToFahrenheit(cDegrees) 
{
    return Math.round(((9/5) * cDegrees) + 32);
}

console.log(celsiusToFahrenheit(30));

// (optional) Do Fahrenheit and Celsius values equate at a certain number?
// The scientific calculation can be complex, so for this challenge just try a series of
// Celsius integer values starting at 200, going downward (descending),
// checking whether it is equal to the corresponding Fahrenheit value.