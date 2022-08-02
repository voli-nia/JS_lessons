// let user = 'John';
// let age79 = 43;
// let idNumber = 22267;

// let usArr = ['John', 43, 22267];
// let role = ['Manager', 'HR', 'Project Manager', 'Office Manager'];

// console.log(usArr);
// console.log(role);

// console.log(usArr[0]);
// console.log(usArr.length);
// console.log(role.length);
// console.log(role[3]);
// console.log(role[999]);
// role[999] = 'Uasea';
// console.log(role[999]);

// usArr[0] = 'Dave';
// console.log(usArr[0]);

let a = [1, 2, 3, 4];
console.log(a);
let firstEl = a[0];
a[0] = a[a.length - 1];
console.log(a);
a[a.length - 1] = firstEl;
console.log(a);


let dataOut = document.querySelector('.out');

// for(let i = 0; i < a.length; i++) {
//     dataOut.innerHTML += a[i] + ' ';
// }


let b = [3, 5, 6, 89, 56, 0, 21];
let max = b[0];

// max
for(let i = 0; i < b.length; i++) {
    if(b[i] > max) {
        max = b[i];
    }
}
dataOut.innerHTML += '<p>MAX: ' + max;

// sum
let sum = 0;
for(let i = 0; i < b.length; i++) {
    sum = sum + b[i];
}
dataOut.innerHTML += '<p>SUM: ' + sum;


// Task 1
// Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

let getBtn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

let x1 = 123;
let x2 = 'Hello';
let x3 = true;
let arr1 = [x1, x2, x3];

getBtn1.onclick = () => {
    console.log(arr1);
    dataOut1.innerHTML += arr1;
}


// Task 2
// Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2.

let getBtn2 = document.querySelector('.b-2');
let dataOut2 = document.querySelector('.out-2');

let arr2 = ['Ann', 21, true];
let str = ' ';

getBtn2.onclick = () => {
    console.log(arr2);
    for(let i = 0; i < arr2.length; i++) {
        if(arr2[i] !== undefined) {
            str += arr2[i] + ' ';
        }
    }
    dataOut2.innerHTML = str;
}


// Task 3
// Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.

let getBtn3 = document.querySelector('.b-3');
let dataOut3 = document.querySelector('.out-3');

let arr3 = ['Ann', 21, true, 'Jim', 23, false];

getBtn3.onclick = () => {
    console.log(arr3.length);
    dataOut3.innerHTML += 'Длина массива: ' + arr3.length;
}


// Task 4
// Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.

let getBtn4 = document.querySelector('.b-4');
let dataOut4 = document.querySelector('.out-4');

let arr4 = ['Ammy', 21, true, 'Jim', 23, false, 23, 48, 56];

getBtn4.onclick = () => {
    console.log(arr4);
    dataOut4.innerHTML += arr4[0] + ' ' + arr4[3] + ' ' + arr4[8];
}


// Task 5
// Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)

let getBtn5 = document.querySelector('.b-5');
let dataOut5 = document.querySelector('.out-5');

let arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let sum5 = '';

getBtn5.onclick = () => {
    console.log(arr5);
    sum5 += arr5[0] + arr5[2] + arr5[3];
    dataOut5.innerHTML += 'Сумма заданных элементов равна: ' + sum5;
}


// Task 6
// Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.

let getBtn6 = document.querySelector('.b-6');
let dataOut6 = document.querySelector('.out-6');

let arr6 = ['Valentina', 'Taurus', 17, 5];

getBtn6.onclick = () => {
    console.log(arr6);
    dataOut6.innerHTML += arr6[0] + ' ' + arr6[1] + " " + arr6[2] + " " + arr6[3];
}


// Task 7
// Добавьте в массив ar7 значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// p>ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

let getBtn7 = document.querySelector('.b-7');
let dataOut7 = document.querySelector('.out-7');

let arr7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let str7 = '';

getBtn7.onclick = () => {
    console.log(arr7);
    arr7[5] = 'italy';
    arr7[6] = 'turkey';
    arr7[7] = 'vietnam';
    console.log(arr7);
    for(let i = 0; i < arr7.length; i++) {
        dataOut7.innerHTML += arr7[i] + ' ';
    }
}


// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

let getBtn8 = document.querySelector('.b-8');
let dataOut8 = document.querySelector('.out-8');
let dataOut81 = document.querySelector('.out-8-1');

let arr8 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];
// let arr8 = [];

getBtn8.onclick = () => {
    console.log(arr8);
    console.log(arr8.length);
    arr8[3] = 3.14;
    arr8[4] = 17;
    arr8[6] = 5;
    console.log(arr8);
    console.log(arr8.length);
    for(let i = 0; i < arr8.length; i++) {
        dataOut8.innerHTML += arr8[i] + '-';
    }
    dataOut81.innerHTML = 'Длина массива: ' + arr8.length;
}


// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// ar9 = [100, 200, 300, 400, 700, 121];

let getBtn9 = document.querySelector('.b-9');
let dataOut9 = document.querySelector('.out-9');

let arr9 = [100, 200, 300, 400, 700, 121];

getBtn9.onclick = () => {
    console.log(arr9);
    console.log(arr9.length);
    for(let i = 0; i < arr9.length; i++) {
        dataOut9.innerHTML = arr9[arr9.length-1];
    }
}


// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// ar10 = [100, 200, 300, 400, 700, 121]

let getBtn10 = document.querySelector('.b-10');
let dataOut10 = document.querySelector('.out-10');

let arr10 = [100, 200, 300, 400, 700, 121];
let sum10 = '';

getBtn10.onclick = () => {
    sum10 = arr10[1] + arr10[arr10.length-1];
    console.log(sum10);
    dataOut10.innerHTML = 'Сумма заданных элементов равна: ' + sum10;
}


// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.
// ar11 = [2,3,4,5,6,7];

let getBtn11 = document.querySelector('.b-11');
let dataOut11 = document.querySelector('.out-11');

let arr11 = [2,3,4,5,6,7];
let str11 = '';

getBtn11.onclick = () => {
    //console.log(arr11);
    let temp = arr11[2];
    arr11[2] = arr11[4];
    arr11[4] = temp;
    //console.log(arr11);
    for(let i = 0; i < arr11.length; i++) {
        str11 += arr11[i] + ' ';
        dataOut11.innerHTML = str11;    
    }
}


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// ar12 = ['test', 'west', 'list', 'class', 'best'];

let getBtn12 = document.querySelector('.b-12');
let dataOut12 = document.querySelector('.out-12');

let arr12 = ['test', 'west', 'list', 'class', 'best'];
let str12 = '';

getBtn12.onclick = () => {
    //console.log(arr12);
    let temp = arr12[0];
    arr12[0] = arr12[arr12.length-1];
    arr12[arr12.length-1] = temp;
    //console.log(arr12);
    for(let i = 0; i < arr12.length; i++) {
        str12 += arr12[i] + ' ';
        dataOut12.innerHTML = str12;
    }
}


// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// ar13 = ['test', 'west', 'list', 'class', 'best'];

let getBtn13 = document.querySelector('.b-13');
let dataOut13 = document.querySelector('.out-13');

let arr13 = ['test', 'west', 'list', 'class', 'best'];
let str13 = '';

getBtn13.onclick = () => {
    for(let i = 0; i < arr13.length; i++) {
        str13 += i + ' ' + arr13[i] + ' ';
        dataOut13.innerHTML = str13;    
    }
}


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// ar14 = [1, 2, 3, 'hello', 66];

let getBtn14 = document.querySelector('.b-14');
let dataOut14 = document.querySelector('.out-14');

let arr14 = [1, 2, 3, 'hello', 66];
let str14 = [];

getBtn14.onclick = () => {
    for(let i = arr14.length - 1; i >= 0; i--) {
        str14 += arr14[i] + ' ';
        console.log(str14);
        dataOut14.innerHTML = str14;
    }
}


// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

let getBtn15 = document.querySelector('.b-15');
let dataOut15 = document.querySelector('.out-15');

let arr15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

getBtn15.onclick = () => {
    for(let i = 0; i < arr15.length; i++) {
        if(arr15[i] > 0) {
            dataOut15.innerHTML += arr15[i] + ' ';
        }  
    }
}


// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]; ar16_odd = []; ar16_even = [];

let getBtn16 = document.querySelector('.b-16');
let dataOut16_odd = document.querySelector('.out-16-odd');
let dataOut16_even = document.querySelector('.out-16-even');

let arr16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let arr16_even = [];
let arr16_odd = [];

getBtn16.onclick = () => {
    for(let i = 0; i < arr16.length; i++) {
        if(arr16[i] % 2 == 0) {
            arr16_even += arr16[i] + ' ';
            console.log(arr16_even);
            dataOut16_even.innerHTML = 'Even: ' + arr16_even;
        } else if(arr16[i] !== 0) {
            arr16_odd += arr16[i] + ' ';
            console.log(arr16_odd);
            dataOut16_odd.innerHTML = 'Odd: ' + arr16_odd;
        }
    }
}


// Task 17 NOT DONE!!!
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

let getBtn17 = document.querySelector('.b-17');
let dataOut17 = document.querySelector('.out-17');

let arr17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let counter = '';

getBtn17.onclick = () => {
    for(let i = 0; i < arr17.length; i++) {
        if(arr17[i] > 3) {
            counter += arr17[i];
            console.log(counter.length);
            dataOut17.innerHTML = counter.length + '- количество элементов в массиве, значение которых больше 3';
        }
    }
}


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// ar18 = [15,24,13,78,21,4,45,67];

let getBtn18 = document.querySelector('.b-18');
let dataOut18 = document.querySelector('.out-18');

let arr18 = [15, 24, 13, 78, 21, 4, 45, 67];
let max18 = arr18[0];

getBtn18.onclick = () => {
    for(let i = 0; i < arr18.length; i++) {
        if(arr18[i] > max18) {
            max18 = arr18[i];
            console.log(max18);
            dataOut18.innerHTML = 'Максимальный элемент массива: ' + max18;
        }
    }
}


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// ar19 = [15,424,313,78,241,4,45,67]

let getBtn19 = document.querySelector('.b-19');
let dataOut19 = document.querySelector('.out-19');

let arr19 = [15, 424, 313, 78, 241, 4, 45, 67];
let min19 = arr19[0];

getBtn19.onclick = () => {
    for(let i = 0; i < arr19.length; i++) {
        if(arr19[i] < min19) {
            min19 = arr19[i];
            console.log(min19);
            dataOut19.innerHTML = 'Индекс минимального элемента массива: ' + i;
        }
    }
}


// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20.
// ar20 = [4, 5, 6, 7, 8, 9, 10];

let getBtn20 = document.querySelector('.b-20');
let dataOut20 = document.querySelector('.out-20');

let arr20 = [4, 5, 6, 7, 8, 9, 10];
let sum20 = 0;

getBtn20.onclick = () => {
    for(let i = 0; i < arr20.length; i++) {
        sum20 += arr20[i];
        dataOut20.innerHTML = sum20;
        }
}