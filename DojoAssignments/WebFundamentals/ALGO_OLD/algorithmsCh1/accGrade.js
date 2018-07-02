// More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “ +” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+).

// Example: Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-".

function letterGrade(score)
{
    if(score >= 90 && score <= 100)
    {
        if(score < 94)
        {
            console.log('A-');
        }
        else
        {
            console.log('A');
        }
    }
    else if(score >= 80 && score <= 89)
    {
        if(score < 84)
        {
            console.log('B-');
        }
        else if(score > 87)
        {
            console.log('B+');
        }
        else
        {
            console.log('B');
        }
    }
    else if(score >= 70 && score <= 79)
    {
        if(score < 74)
        {
            console.log('C-');
        }
        else if(score > 77)
        {
            console.log('C+');
        }
        else
        {
            console.log('C');
        }
    }
    else if(score >= 60 && score <= 69)
    {
        if(score < 64)
        {
            console.log('D-');
        }
        else if(score > 67)
        {
            console.log('D+');
        }
        else
        {
            console.log('D');
        }
    }
    else
    {
        console.log('F');
    }
}

letterGrade(63);