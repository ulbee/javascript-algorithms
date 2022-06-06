/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
        }
    }

    return arr.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"