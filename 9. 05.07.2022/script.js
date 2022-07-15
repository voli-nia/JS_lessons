// Task1
// Используя вложенные циклы создайте таблицу умножения от 1 до 10.
// Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее.
// Оформить в виде столбцов где выводятся множители и результат.

let getBtn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

getBtn1.onclick = () => {
    for(let i = 1; i <= 10; i++) {
        for(let j = 1; j <= 10; j++) {
            dataOut1.innerHTML += `${i}*${j}=${j * i}<br>`;
        }
        dataOut1.innerHTML += '<hr>';
    }
}



// Task2
// С помощью вложенных циклов и символа * нарисуйте:
// *****
// *****
// *****

let getBtn2 = document.querySelector('.b-2');
let dataOut2 = document.querySelector('.out-2');

getBtn2.onclick = () => {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 5; j++) {
            dataOut2.innerHTML += '*';
        }
        dataOut2.innerHTML += '<br>';
    }
    dataOut2.innerHTML += '<br>';
}



// Task3
// С помощью вложенных циклов и символа * нарисуйте:
// *****
// ****
// ***
// **
// *

let getBtn3 = document.querySelector('.b-3');
let dataOut3 = document.querySelector('.out-3');
let flag3 = 5;

getBtn3.onclick = () => {
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            if(j < flag3) {
                dataOut3.innerHTML += '*';
            } else {
                dataOut3.innerHTML += ' ';
            }
        }
        flag3--;
        dataOut3.innerHTML += '<br>';
    }
    dataOut3.innerHTML += '<br>';
}



// Task4
// С помощью вложенных циклов и символа * нарисуйте:
// |  *****
// | *****
// |*****

let getBtn4 = document.querySelector('.b-4');
let dataOut4 = document.querySelector('.out-4');
let flag4 = 9;

// getBtn4.onclick = () => {
//     for(let i = 0; i < 3; i++) {
//         for(let j = 7; j > 0; j--) {
//             if(j < flag4) {
//                 dataOut4.innerHTML += '*';
//             } else {
//                 dataOut4.innerHTML += 'x';
//             }
//         }
//         flag4++;
//         dataOut4.innerHTML += '<br>';
//     }
//     dataOut4.innerHTML += '<br>';
// }

let r = 5;
getBtn4.onclick = () => {
    for(let i = 0; i < r; i++) {
        for(let j = i; j < r; j++){
            dataOut4.innerHTML += '*';
        }
        dataOut4.innerHTML += ' *' + `${i}` + '<br>';
    }
    dataOut4.innerHTML += '<br>';
}


// Task5
// С помощью вложенных циклов и символа * нарисуйте:
// *
// **
// ***
// **
// *


// Task6
// С помощью вложенных циклов и символа * нарисуйте:
// ******
// *       *
// *       *
// *       *
// ******


// Task7
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1


// Task8
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1


// Task9
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла: 
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1


// Task10
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


// Task11
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
// 5
// X X
// 3 3 3
// X X X X
// 1 1 1 1 1


// Task12
// С помощью вложенных циклов и символа * нарисуйте:
// |  *****
// | *******
// |*********


// Task13
// С помощью вложенных циклов и символа * нарисуйте:
// |  **
// | ****
// |******
// | ****
// |  **




// let getBtn3 = document.querySelector('.b-3');
// let dataOut3 = document.querySelector('.out-3');
// let flag3 = 5; // общее кол-во символов в строке

// getBtn3.onclick = () => {
//     for(let i = 0; i < 5; i++) { // общ кол-во строк в фигуре
//         for(let j = 0; j < 5; j++) { // общ кол-во символов в строке
//             if(j < flag3) {
//                 dataOut3.innerHTML += '*';
//             } else {
//                 dataOut3.innerHTML += ' ';
//             }
//         }
//         flag3--;
//         dataOut3.innerHTML += '<br>';
//     }
//     dataOut3.innerHTML += '<br>';
// }


// getBtn2.onclick = () => {
//     for(let i = 0; i < 3; i++) {     // i - кол-во строк
//         for(let j = 0; j < 5; j++) { // j - кол-во символов в строке
//             dataOut2.innerHTML += '*';
//         }
//         dataOut2.innerHTML += '<br>';
//     }
//     dataOut2.innerHTML += '<br>';
// }
// `${i}`
// `${i}`