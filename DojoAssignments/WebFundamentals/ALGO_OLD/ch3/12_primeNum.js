// Is Prime
// Return whether a given integer is prime.
// Prime numbers are only evenly divisible by themselves and 1.
// Many highly optimized solutions exist, however, for now,
// just create one that is easy to understand and debug.

//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
// 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107,
// 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167,
// 173, 179, 181, 191, 193, 197, 199

function primeNum(num)
{
    if(num == 1)
    {
        return 'prime';
    }

    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return 'not prime';
        }
    }
}

console.log(primeNum(4));