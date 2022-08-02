// let a = [8, 9, 10];

// let b = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];


// console.log(b);

// let out = ' ';

// for(let i = 0; i < b.length; i++) {
//     console.log(b[i]);
//     let c = b[i]; // [1, 2, 3]
//     for(let j = 0; j < c.length; j++) {
//         console.log(c[j]);
//     };
//     for(let k = c.length; k >= 0; k--) {
//         console.log(c[k]);
//     };
//     for(let m = 0; m < b[i].length; m++) {
//         console.log(b[i][m]);
//     out += b[i][m] + ' ';
//     }
//     out += '<br>';
// }

// document.querySelector('.out').innerHTML = out ;


// let c = [1, 0, 0, 0];
// let j = 0;

// document.querySelector('#push').onclick = () => {
//     if(j + 1 < 4){
//         c[j] = 0;
//         c[j + 1] = 1;
//         j++;
//     }
//     document.querySelector('.out2').innerHTML = c;
// }



///////////////////////////////////////



// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение 55 из массива a1. Возвратите это значение.

let getBtn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

let arr1 = [55];

getBtn1.onclick = () => {
    dataOut1.innerHTML = arr1[0];
}

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.

let getBtn2 = document.querySelector('.b-2');
let dataOut2 = document.querySelector('.out-2');

let arr2 = ['hi'];

getBtn2.onclick = () => {
    dataOut2.innerHTML = arr2[0];
}

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение my из массива a3. Возвратите это значение.

let getBtn3 = document.querySelector('.b-3');
let dataOut3 = document.querySelector('.out-3');

let arr3 = ['my'];

getBtn3.onclick = () => {
    dataOut3.innerHTML = arr3[0];
}


// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна вывести в out-4 значение go из массива a4. Возвратите это значение.

let getBtn4 = document.querySelector('.b-4');
let dataOut4 = document.querySelector('.out-4');

let arr4 = ['go'];

getBtn4.onclick = () => {
    dataOut4.innerHTML = arr4[0];
}

// Task 5
// При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 четные значения из массива a5. Для перебора используем цикл.

let getBtn5 = document.querySelector('.b-5');
let dataOut5 = document.querySelector('.out-5');

let arr5 = [1, 5, 10, 22, 48, 57];

getBtn5.onclick = () => {
    for(let i = 0; i < arr5.length; i++) {
        if(arr5[i] % 2 == 0) {
            dataOut5.innerHTML += arr5[i] + ' ';
        }
    }
}

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 нечетные значения из массива a6. Для перебора используем цикл. Делаем по образу предыдущей задачи.

let getBtn6 = document.querySelector('.b-6');
let dataOut6 = document.querySelector('.out-6');

let arr6 = [1, 5, 10, 22, 48, 57];

getBtn6.onclick = () => {
    for(let i = 0; i < arr6.length; i++) {
        if(arr6[i] % 2 !== 0) {
            dataOut6.innerHTML += arr6[i] + ' ';
        }
    }
}


// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна вывести в out-7 четные значения из массива a7. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

let getBtn7 = document.querySelector('.b-7');
let dataOut7 = document.querySelector('.out-7');

let arr7 = [
    [1, -2, -3],
    [-4, 5, 6],
];

getBtn7.onclick = () => {
    for(let i = 0; i < arr7.length; i++) {
        let row7 = arr7[i];
        for(let r = 0; r < row7.length; r++) {
            if(row7[r] % 2 == 0) {
                dataOut7.innerHTML += row7[r] + ' ';
            }
        }
    }
}


// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна вывести в out-8 нечетные значения из массива a8. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

let getBtn8 = document.querySelector('.b-8');
let dataOut8 = document.querySelector('.out-8');

let arr8 = [
    [1, -2, -3],
    [-4, 5, 6],
];

getBtn8.onclick = () => {
    for(let i = 0; i < arr8.length; i++) {
        let row8 = arr8[i];
        for(let r = 0; r < row8.length; r++) {
            if(row8[r] % 2 !== 0) {
                dataOut8.innerHTML += row8[r] + ' ';
            }
        }
    }
}


// Task 9
// При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 значения из массива a9, которые больше нуля. Используем цикл. Вывод - через пробел.

let getBtn9 = document.querySelector('.b-9');
let dataOut9 = document.querySelector('.out-9');

let arr9 = [
    [1, -2, -3],
    [-4, 5, 6],
];

getBtn9.onclick = () => {
    for(let i = 0; i < arr9.length; i++) {
        let row9 = arr9[i];
        for(let r = 0; r < row9.length; r++) {
            if(row9[r] > 0) {
                dataOut9.innerHTML += row9[r] + ' ';
            }
        }
    }
}


// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна вывести в out-10 значения из массива a10, которые являются строкой. Используем цикл. Вывод - через пробел.

let getBtn10 = document.querySelector('.b-10');
let dataOut10 = document.querySelector('.out-10');

let arr10 = [
    [1, 'hi', -3],
    ['doode', 5, 72],
];

getBtn10.onclick = () => {
    for(let i = 0; i < arr10.length; i++) {
        for(let r = 0; r < arr10[i].length; r++) {
            if(typeof arr10[i][r] === 'string') {
                dataOut10.innerHTML += arr10[i][r] + ' ';
            }
        }
    }
}


// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив должен идти в обратном порядке. Вывод через пробел. Т.е. вы должны получить в out-10 строку вида 6 5 4 8 7 13 12 11 10 9. Решаем задачу двумя циклами, без reverse.

let getBtn11 = document.querySelector('.b-11');
let dataOut11 = document.querySelector('.out-11');

let arr11 = [
    [4, 5, 6],
    [7, 8],
    [9, 10, 11, 12, 13],
];
let revArr11 = ' ';

getBtn11.onclick = () => {
    for(let i = 0; i < arr11.length; i++) {
        for(let r = arr11[i].length - 1; r >= 0; r--) {
            console.log(arr11[i][r]);
            dataOut11.innerHTML += arr11[i][r] + ' ';
        }
    }
}


// Task 12
// Дан массив a12 который моделирует шахматную доску. Используя цикл выведите в out-12 единицы из этого массива. Все действия в функции f12. Функция запускается при нажатии на b12. Вывод через пробел.

let getBtn12 = document.querySelector('.b-12');
let dataOut12 = document.querySelector('.out-12');

let arr12 = [
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
];

getBtn12.onclick = () => {
    for(let i = 0; i < arr12.length; i++) {
        for(let j = 0; j < arr12[i].length; j++) {
            if(arr12[i][j] == 1) {
                console.log(arr12[i][j])
                dataOut12.innerHTML += arr12[i][j] + ' ';
            }
        }
    }
}


// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна присвоить переменной a13 массив эмулирующий шахматную доску. Причем массив должен создаваться с помощью циклов. Для проверки - выведите массив в консоль.

let getBtn13 = document.querySelector('.b-13');
let dataOut13 = document.querySelector('.out-13');

let a13 = ' ';


getBtn13.onclick = function createChess(x, y) {
    for(let i = 2; i < 8; i++) {
        let row13 = ' ', x, y;
        if(i % 2 == 0) {
            x = 'X';
            y = 'O';
        } else {
            x = 'O';
            y = 'X';
        }
        for(let j = 8; j > 2; j--) {
            if(j % 2 == 0) {
                row13 += x;
            } else {
                row13 += y;
            }
        }
        console.log(row13);
        dataOut13.innerHTML += row13 + '<br>';
    }
}


// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна вывести в out-14 длины вложенных в a14 массивов. Через пробел.

let getBtn14 = document.querySelector('.b-14');
let dataOut14 = document.querySelector('.out-14');

let arr14 = [
    [1, -2, -3],
    [-4, 5],
    [6, 7, 8, -9, 10],
];

getBtn14.onclick = () => {
    for(let i = 0; i < arr14.length; i++) {
        let row14 = arr14[i];
        for(let r = 0; r < row14.length; r++) {
            console.log(row14.length);
        }
        dataOut14.innerHTML += row14.length + ' ';
    }
}


// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15.

let getBtn15 = document.querySelector('.b-15');
let dataOut15 = document.querySelector('.out-15');

let arr15 = [
    [1, -2, -3],
    [-4, 5],
    [6, 7, 8, -9, 10, 12, 0],
];
let longest15 = 0;

getBtn15.onclick = () => {
    for(let i = 0; i < arr15.length; i++) {
        for(let j = 0; j < arr15[i].length; j++) {
            console.log(arr15[i]);
            if(arr15[i].length > 0) {
                longest15 = arr15[i].length;
                console.log(longest15)
                dataOut15.innerHTML = 'Длина самого длинного вложенного массива: ' + longest15;
            }
        }
    }
}


// Task 16
// Впишите в переменную a16 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

let getBtn16 = document.querySelector('.b-16');
let dataOut16 = document.querySelector('.out-16');

let a16 = [
    [0,7,0,6],
    0,
    0,
    8
];

getBtn16.onclick = () => {
    console.group('Task 16 ================');
    console.log(a16[3] == 8);
    console.log(a16[0][1] == 7);
    console.log(a16[0][3] == 6);
}


// Task 17
// Впишите в переменную a17 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

let getBtn17 = document.querySelector('.b-17');
let dataOut17 = document.querySelector('.out-17');

let a17 = [
    [2, 5, 6],
    [8, 7, 24, 48],
    36,
    [12, 3, 8, 6, 42]
];

getBtn17.onclick = () => {
    console.group('Task 17 ================');
    console.log(a17[3][2] == 8);
    console.log(a17[1][1] == 7);
    console.log(a17[0][2] == 6);
}


// Task 18
// Впишите в переменную a18 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

let getBtn18 = document.querySelector('.b-18');
let dataOut18 = document.querySelector('.out-18');

let a18 = [
    3,
    [1, 34, 26],
    [17, 12, 56, 48, 4],
    [2, 4],
    [8, 12]
];

getBtn18.onclick = () => {
    console.group('Task 18 ================');
    console.log(a18[0] == 3);
    console.log(a18[4][0] == 8);
    console.log(a18[2][1] == 12);
}


// Task 19
// Впишите в переменную a19 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

let getBtn19 = document.querySelector('.b-19');
let dataOut19 = document.querySelector('.out-19');

let a19 = [
    [[2, 3], [5, 4], 7],
    [[12, 82, 8], [56, 13, 2, 4]],
    [2, [12, 56], 33]
];

getBtn19.onclick = () => {
    console.group('Task 19 ================');
    console.log(a19[0][0][1] == 3);
    console.log(a19[1][0][2] == 8);
    console.log(a19[2][1][0] == 12);
}


// Task 20
// Впишите в переменную a20 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

let getBtn20 = document.querySelector('.b-20');
let dataOut20 = document.querySelector('.out-20');

let a20 = [
    [[2, 3], [5, 4], [7, 32]],
    [18, [118, 13, 2, 4]],
    112,
    [71, [52, 14], 24, [42, 1, 23]]
];

getBtn20.onclick = () => {
    console.group('Task 20 ================');
    console.log(a20[0][2][1] == 32);
    console.log(a20[1][0] == 18);
    console.log(a20[2] == 112);
    console.log(a20[3][3][0] == 42);
}