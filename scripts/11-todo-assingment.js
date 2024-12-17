// this is code to chnage the last value of the array to 99
const number = [10, 20, 23, 45]

console.log(number)
number[number.length - 1] = 99;
console.log(number)

//  this is a function to get the last value of the array
function getLastArray(array) {
    console.log(array[array.length - 1])
}

getLastArray(['hi', 'hello', 'good'])

// this is a function to swap the first and last value of an arrray
function arraySwap(array) {
    const lastindex = array.length - 1;

    const lastvalue = array[lastindex];
    const firstvalue = array[0];

    array[0] = lastvalue;
    array[lastindex] = firstvalue;

    return array;
}

console.log(arraySwap([1, 2, 3, 4, 5, 6]));

// for loop to loop at +2
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}


// to loop down from 5 to 0 
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}