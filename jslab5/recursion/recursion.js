"use strict";
function degree(number, n){
    return (n != 1) ? number * degree(number, n-1) : number;
}
console.log(degree(2, 5));

function fib(n){
    return (n <= 2) ? 1 : fib(n-1) + fib(n-2);
}
console.log(fib(6));