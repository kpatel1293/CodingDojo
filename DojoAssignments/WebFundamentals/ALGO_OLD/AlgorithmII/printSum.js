// PrintSum

// Please complete the code below to have the function
// print integers from 0 to 255 and with each integer print 
// the sum so far.  Have the function return the final sum

function printSum(x){
    sum = 0;
    //your code here
    for(let x = 0; x <= 255; x++)
    {
        sum += x;
        console.log(x);
        console.log(sum);
    }

    return sum;
  }
  y = printSum(255); // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y); // should print 32385