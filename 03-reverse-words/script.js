/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
    const arr = str.split(' ');
    const length = arr.length;
    let reversedStr = '';

    for (let i = 0; i < length; i++) {
        if (i != 0) {
            reversedStr += ' ';
        }
        reversedStr += arr[length - i - 1];        
    }

    return reversedStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"