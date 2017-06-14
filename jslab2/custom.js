var str = "Nulla facilisis fermentum facilisi, vitae malesuada massa mattis nec",
    longestWord = 0,
    counter = 0,
    firstLetter = 0,
    i = 0;
function findLongestWord(str) {
    for (i = 0; i <= str.length; i++) {
        if (str[i] !== ' ' && str[i] !==',') {
            counter += 1;
        } else {
            if (counter > longestWord) {
                longestWord = counter;
                firstLetter = i - counter;
            }
            counter = 0;
        }
    }
//проверка последнего числа
    if (counter > longestWord) {
        longestWord = counter;
        firstLetter = str.length - counter + 1;
    }
    console.log(str.substr(firstLetter, longestWord));
}
findLongestWord(str);

