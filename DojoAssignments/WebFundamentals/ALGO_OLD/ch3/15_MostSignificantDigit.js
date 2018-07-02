// Most Significant Digit

// If you already know who Ada Lovelace is, that’s great! In a History of Science, she is significant.

// Given a number of any size, return the most significant digit. If you already know what strings are,
// that’s great! However, don’t use them here. Hint: use WHILE to bring the most significant digit into a range
// where you can use the friendly modulus operator (%). The most significant digit is the leftmost non-zero digit of a number.
// Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.

// Second: handle negative num values as well, doing what you think is appropriate.

function mostSig(num)
{
    num = num / .001;
    num = num.toString().split('');

    return parseInt(num[0]);
}

console.log(mostSig(0.00987));
console.log(mostSig(12345));