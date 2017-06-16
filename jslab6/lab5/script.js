"use strict";

// 1. При помощи JS заполнить поле для ввода email значением.
document.getElementsByName('email')[0].value = 'ssh.shvchnko@email.com';
// 2. Поля для ввода имени и фамилии - сделать границу красной.
document.getElementsByName('first-name')[0].style.border=  '1px solid red';
document.getElementsByName('last-name')[0].style.border=  '1px solid red';
// 3. Поставить галочку в чекбокс.
document.getElementsByName('send-me')[0].checked  = true;
// 4. Изменить цвет и надпись в submit.
document.getElementsByName('create-account')[0].style.background =  'pink';
document.getElementsByName('create-account')[0].style.color =  'red';
document.getElementsByName('create-account')[0].style.borderColor =  'pink';
document.getElementsByName('create-account')[0].value =  'New Text';