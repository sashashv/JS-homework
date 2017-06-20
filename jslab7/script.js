var form = document.forms.survey;

form.onsubmit = function (e) {
    e.preventDefault();//отменяет действие по умолчанию, например отправку формы, переход по ссылке
    
    resetError(this.elements.name.parentNode);
    if (!validateString(this.elements.name.value, 2, 20)) {
        showError(this.elements.name.parentNode, ' Enter your name');
    }
    resetError(this.elements.surname.parentNode);
    if (!validateString(this.elements.surname.value, 3, 30)) {
        showError(this.elements.surname.parentNode, ' Enter your surname');
    }
    resetError(this.elements.email.parentNode);
    if (!validateEmail(this.elements.email.value)) {
        showError(this.elements.email.parentNode, ' Enter your email');
    }
    resetError(this.elements.phone.parentNode);
    if (!validatePhone(this.elements.phone.value)) {
        showError(this.elements.phone.parentNode, ' Enter your phone');
    }

};

function validateString(str, min, max) {
    return (str.length >= min) && (str.length <= max) && (checkName(str));
}
//функции валидации
function validateEmail(str) {
    return checkEmail(str);
}
function validatePhone(str) {
    return checkPhone(str);
}

function checkName(str) {
    var wrongSymbols = '01234567890!?:;.';
    for (var i = 0; i < str.length; i++){
        if (wrongSymbols.indexOf(str[i]) > -1) return false;
    }
    return true;
}
//функции проверок
function checkEmail(str) {
    if (str.indexOf('@') < 1) return false;
    if (str.indexOf('.') <= str.indexOf('@') + 2) return false;
    if (str.indexOf('.') == str[str.length-1]) return false;
    return true;
}
// формат номера телефона ххх-хх-хх
function checkPhone(str) {
    var rightSymbols = "0123456789";
    if (str.length < 9) return false;
    if (str.indexOf("-") !== 3 && str.indexOf("-") !== 6) return false;
    for (var i = 0; i < str.length; i++){
        if (i == 3 || i == 6) continue;
        if (rightSymbols.indexOf(str[i]) === -1) return false;
    }
    return true;
}
//вывод сообщения об ошибке
function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}
//убирает сообщение об ошибках
function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}