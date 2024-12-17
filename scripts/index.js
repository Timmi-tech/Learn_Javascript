function calculator(firstN, secondN) {
    let Selection1 = '+'
    let Selection2 = '-'
    let Selection3 = '*'
    let Selection4 = '/'

    if (Selection1 === '+') {
        sum = firstN + secondN;
        console.log(sum);
    } else if (Selection2 === '-') {
        subtraction = firstN - secondN;
        console.log(subtraction);
    } else if (Selection2 === '*') {
        multiply = firstN * secondN;
        console.log(multiply);
    } else if (Selection2 === '/') {
        division = firstN / secondN;
        console.log(division);
    }
}

Add(4, 6)