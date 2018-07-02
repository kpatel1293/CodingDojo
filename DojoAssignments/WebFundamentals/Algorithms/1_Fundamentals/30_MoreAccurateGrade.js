// More Accurate Grades

// For an additional challenge, add ‘-’ signs to scores in the
// bottom two percent of A, B, C and D scores, and “ +” signs to
// the top two percent of B, C and D scores (sorry, Mr. Cerise
// never gives an A+).

// Example: Given 88, console.log "Score: 88. Grade: B+".
// Given 61, log "Score: 61. Grade: D-".

function letterGradeAcc(score)
{
    var grade = '';

    if(score >= 90 && score <= 100) 
    { 
        if(grade < 93)
        {
            grade = '-A'
        }
        else
        {
            grade = 'A';
        }
    }
    else if(score >= 80 && score <= 89) 
    { 
        if(grade > 86)
        {
            grade = '+B'
        }
        else if(grade < 83)
        {
            grade = '-B';
        }
        else
        {
            grade = 'B';
        }
    }
    else if(score >= 70 && score <= 79) 
    { 
        if(grade > 76)
        {
            grade = '+C'
        }
        else if(grade < 73)
        {
            grade = '-C';
        }
        else
        {
            grade = 'C';
        }
    }
    else if(score >= 60 && score <= 69) 
    { 
        if(grade > 66)
        {
            grade = '+D'
        }
        else if(grade < 63)
        {
            grade = '-D';
        }
        else
        {
            grade = 'D';
        } 
    }
    else if(score < 60) 
    { 
        grade = 'F'; 
    }
    else { console.log('Grade Must Be Between 0 - 100'); }

    console.log('Score: ' + score + ' Grade: ' + grade);
}

letterGradeAcc(81);