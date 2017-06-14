'use strict';
// TASK 1
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
var testArr = [],
    testLength = 20;
for (var i = 0; i < testLength; i++)
    testArr.push(randomNumbers(-50, 50));
console.log(testArr);
var evenArr = testArr.filter(function (item) {
    return ((item % 2 === 0) && (item >= -10) && (item <= 10));
});
console.log(evenArr);

//TASK 2
// var arr = new Array(30);
var arr = [],
    arrLength = 29;

for (var i = 0; i < arrLength; i++){
    arr[0] = 1;
    arr[i+1] = arr[i] + 1;
}
console.log(arr);
var arrResult = arr.map(function (item) {
    if (item % 3 === 0 && item % 5 === 0) {
        return "AB";
    }else if (item % 5 === 0) {
        return "B";
    }else if (item % 3 ===0){
        return "A";
    }else{
        return item;
    }
});
console.log(arrResult);

//TASK 3
function arg() {
    switch (arguments.length) {
        case 2:
            return console.log(Math.pow(arguments[0], arguments[1]));
            break;
        case 3:
            return console.log(arguments[0] * arguments[1] * arguments[2]);
            break;
        case 4:
            return console.log(arguments[0] + arguments[1] + arguments[2] + arguments[3]);
            break;
        default:
            alert ('Функция не может иметь столько значений');
            break;
    }
}
arg(2, -1, 3);


