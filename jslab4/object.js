"use strict";
//Task 1
function testYear(year) {
    var time = new Date(year, 2, 0);
    if (time.getDate() == 29){
        return console.log('yes');
    }else{
        return console.log('no');
    }
}
testYear(2012);
//Task 2
// function letterCount() {
//     var word = prompt('enter your word', ''),
//         obj = {},
//         counter = 0;
//     word.toLowerCase();
//     for (var i = 0; i < word.length; i++){
//         for (var key in obj){
//             if (key == word[i]){
//                 counter +=1;
//                 obj[key] = counter;
//             }
//             key = word[i];
//             counter +=1;
//             obj[key] = counter;
//         }
//     }
//     return
//     for (key in obj){
//         alert ('letter '+key+'counter '+  obj[key] );
//     }
// }
// letterCount();
//Task 3
function getReverse() {
    var number = prompt ('enter your number', '1'),
        arr = number.split('').reverse();
    return number = arr.join('');
}
console.log(getReverse());
