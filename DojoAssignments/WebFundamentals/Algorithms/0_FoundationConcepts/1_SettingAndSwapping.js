// Setting and Swapping

// Set variable myNumber to 42. Set variable myName to your name. Now swap myNumber into myName & vice versa.

function swap()
{
    var myNumber = 42;          //set myNumber var
    var myName = 'Krishna';     //set myName var
    
    //print before swap val of myName and myNumber
    console.log("Before swap, myName = " + myName + " & myNumber = " + myNumber);
    
    var temp = '';              //declare a temp var
    
    //swap myName and myNumber
    temp = myNumber;
    myNumber = myName;
    myName = temp;

    //print new myName and myNumber
    console.log("After swap, myName = " + myName + " & myNumber = " + myNumber);
}

//call function
swap();