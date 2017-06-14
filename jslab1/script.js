"use strict";
var a = prompt('Введите первое число', '1'),
    action = prompt('Введите + для сложения, - для вычитания, * для умножения, / для деления'),
    b = prompt('Введите второе число', '1');

function isNumeric(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
}

function actionTest(action) {
    return (action == '+' && action == '-' && action == '/' && action == '*');
}

function calc() {

    switch (action) {
        case '+' :
            alert(+a + (+b));
            break;
        case '-' :
           alert(a - b);
            break;
        case '*' :
            alert(a * b);
            break;
        case '/':
            // a/b == Infinity ? alert('На ноль делить нельзя') : alert(a/b);
            if (a/b == Infinity) {
                alert('На ноль делить нельзя');
            } else {
                alert(a/b);
            }
            break;
        default:
            alert('Введите корректное действие');
    }
}

calc();

while (!(isNumeric(a) && isNumeric(b) && actionTest(action))){
    alert('Введите числа еще раз');
    a = prompt('Введите первое число', '1'),
    action = prompt('Введите + для сложения, - для вычитания, * для умножения, / для деления'),
    b = prompt('Введите второе число', '1');
}

