/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
    const length = str.length;

    if (str === "") {
        return true;
    }

    for (let i = 0; i <= length / 2; i++) {
        if (str[i].toLowerCase() !== str[length - 1 - i].toLowerCase()) {
            return false;
        }         
    }

    return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('')); // должно быть true
console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/

function fullPalindrome(str) {
    const regexp = /[^a-zа-яё]/gi;
    const newStr = str.replace(regexp, '');
    const length = newStr.length;

    if (newStr === "") {
        return true;
    }

    for (let i = 0; i <= length / 2; i++) {
        if (newStr[i].toLowerCase() !== newStr[length - 1 - i].toLowerCase()) {
            return false;
        }         
    }

    return true;
}