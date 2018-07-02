//PrintSumArray
//Please complete the code below to have the function return 
//the sum of all the values in a given array

function printSumArray(x){
    sum = 0;
    for(var i=0; i<x.length; i++) 
    {
      //your code here
      sum += x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6