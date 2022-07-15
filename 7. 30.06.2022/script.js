let f1 = document.querySelector('.f-1');

function one() {
    console.log('It\'s work!')
}
one();

////////////////////////////////////

f1.onclick = one;
f1.onclick = function() {
    console.log('Hello world!!!')
}

////////////////////////////////////

f1.onclick = one;
f1.onclick = () => {
    console.log('Hello world!!!')
}

////////////////////////////////////

console.log(1 + one());
console.log(one());



function two() {
    console.log('It works again!');
    return 35;
}
two();

console.log(1 + two());
console.log(two());



let x = 6;
let y = 7;
let z;
function multiple() {
    console.log(x * y);
    // z = x * y;
    return x * y;
}
multiple();

let c1 = multiple();
let c2 = 10 * multiple();
console.log(c1, c2);


function multiple2(a = 8, b = 10) {
    return a * b;
}
multiple2();

console.log(multiple2(3, 5));
console.log(multiple2(20, 9));
console.log(multiple2(x, y));
console.log(multiple2(10));
console.log(multiple2());


document.querySelector('.f-2').onclick = function() {
    console.log('*******');
}
document.querySelector('.f-2').onclick = function() {
    console.log('Second');
    console.log('7*******7');
}


////////////////////////

// () => {}
// (a, b) => {}
// a => {} //плохой пример, так не делать, лучше обернуть в скобки
// function(a) {return 5 * a} // a => 5 * a


////////////////////////

// Task1
// Напишите функцию t1, которая при нажатии кнопки выводит в .out-1
// переменную a1

let btn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

btn1.onclick = function() {
    dataOut1.innerHTML = 'a1';
}



// Task2
// Изменим задачу №1. Сецчас она только выводит переменную в заранее
// заданный блок. Сделаем так, чтобы функция была более гибкой.
// Пусть теперь функция t2 возвращает (return) переменную a2.
// Поскольку функция возвращает переменную, то имя функции со скобками
// (вызов функции) можно встраивать в выражения. Обратите внимание как
// изменится вызов функции теперь.

let btn2 = document.querySelector('.b-2');
let dataOut2 = document.querySelector('.out-2');

function f2() {
    return 'a2';
}

btn2.onclick = () => {
    dataOut2.innerHTML = f2();
};



// Task3
// Наша предыдущая функция сильно всё ещё зависима от внешних переменных.
// Давайте сделаем её более универсальной. Пусть функция t3 принимает 2 
// аргумента и возвращает (return) их произведение. Допишите код функции так,
// чтобы она возвращала произведение двух чисел, переданных ей в качестве
// аргументов a, b. Протестируем функцию на двух примерах с помощью кнопок
// .b-3-1 и .b-3-2

let btn31 = document.querySelector('.b-3-1');
let btn32 = document.querySelector('.b-3-2');
let dataOut3 = document.querySelector('.out-3');

function f3(x31 = 2, x32 = 10) {
    let x33 = x31 * x32;
    return x33;
}

btn31.onclick = () => {
    dataOut3.innerHTML = f3(3, 5);
};
btn32.onclick = () => {
    dataOut3.innerHTML = f3();
};



// Task4
// Напишите функцию t4 которая принимает ваш год рождения
// и вычисляет (возвращает) ваш возраст

let data4 = document.querySelector('.i-4');
let btn4 = document.querySelector('.b-4');
let dataOut4 = document.querySelector('.out-4');

btn4.onclick = function age(a) {
    a = data4.value;
    let z = 2022 - a;
    dataOut4.innerHTML = z;
}



// Task5
// Напишите функцию t-5 которая принимает ваше имя в качестве
// параметра и возвращает (return) число символов в нём,
// где name - принятое в качестве параметра имя. Длину (число символов)
// можно посчитать, используя свойство .length

let data5 = document.querySelector('.i-5');
let btn5 = document.querySelector('.b-5');
let dataOut5 = document.querySelector('.out-5');

btn5.onclick = function nameLength(a) {
    a = data5.value;
    let z = a.length;
    dataOut5.innerHTML = 'В имени ' + a + ' ' + z + ' букв';
}



// Task6
// Напишите функцию t-6, которая принимает 2 числа и возвращает случайное
// целое число от первого до второго принятого параметра.

let data61 = document.querySelector('.i-6-1');
let data62 = document.querySelector('.i-6-2');
let btn6 = document.querySelector('.b-6');
let dataOut6 = document.querySelector('.out-6');

function random(min = data61.value, max = data62.value) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn6.onclick = () => {
    dataOut6.innerHTML = random();
}



// Task7
// Напишите функцию t-7 которая возвращает случайный цвет в формате
// rgb(x, y, z) (строка). Где x, y, z - случайные числа в диапазоне [0, 255]

let btn7 = document.querySelector('.b-7');
let dataOut7 = document.querySelector('.out-7');

let myFunc = function(max) {
    let x = Math.floor(Math.random() * max);
    let y = Math.floor(Math.random() * max);
    let z = Math.floor(Math.random() * max);
    return `rgb(${x}, ${y}, ${z})`;
}
// console.log(myFunc(256))

btn7.addEventListener('click', function() {
    dataOut7.innerHTML = myFunc(256);
})



// Task8
// Напишите функцию t-8, которая принимает строку в качестве параметра
// и возвращает результат с очищенными пробелами в начале и в конце строка.
// Т.е. принимает _hello_ (где знак _ символизирует пробел), а возвращает hello.
// Для удаления пробелов - используйте trim.

let data8 = document.querySelector('.i-8');
let getBtn8 = document.querySelector('.b-8');
let dataOut8 = document.querySelector('.out-8');

getBtn8.onclick = () => {
    let inData = data8.value;
    let outData = inData.trim();
    dataOut8.innerHTML = outData;
}



// Task9
// Напишите функцию t-9, которая принимает число и возвращает true, если 
// число чётное, и false - если нечётное

let data9 = document.querySelector('.i-9');
let getBtn9 = document.querySelector('.b-9');
let dataOut9 = document.querySelector('.out-9');

getBtn9.onclick = () => {
    let inData = data9.value;
    if(inData % 2 == 0) {
        dataOut9.innerHTML = true;
    } else {
        dataOut9.innerHTML = false;
    }
    
}

// Task10
// Напишите функцию t-10, которая принимает 2 числа и возвращает большее из них.
// В случае равенства - первое.

let data101 = document.querySelector('.i-10-1');
let data102 = document.querySelector('.i-10-2');
let getBtn10 = document.querySelector('.b-10');
let dataOut10 = document.querySelector('.out-10');

getBtn10.onclick = () => {
    let x1 = data101.value;
    let x2 = data102.value;
    if(x1 > x2) {
        dataOut10.innerHTML = x1;
    } else if(x1 < x2) {
        dataOut10.innerHTML = x2;
    } else {
        dataOut10.innerHTML = x1;
    }
}