//Task 2
function letterCount() {
    var word = prompt('enter your word', ''),
        obj = {};
    word.toLowerCase();
    var arr = word.split('');
    arr.map(function (i) {
        obj[i] = !obj[i] ? 1 : obj[i]+1;
    });
    return obj;
};
console.log(letterCount());