const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ["a", "b", "c", "d", "e", "f"];

// push - всегда добавляет элемент в конец массива

a.push(10, 20, 30, 40); 
console.log(a);

b.push("g, h, i, j");
console.log(b);


// pop - удаляет последний элемент массива

console.log(b.pop());
console.log(b.pop());

// delete - удаляет элемент внутри массива

delete a[3];
console.log(a);

// splice - удаление элемента внутри массива, но не оставляю элемент пустым (empty). Но когда мы его используем вместо
// delete то нарушается индексация. Поэтому массивы лучше клонировать и работать с клоном наших массивов до новых изменений и т.д.

a.splice(3, 3);
a.splice(3, 5, "world")
console.log(a);

// shift - удаляет первый элемент массива
// unshift - добавляет первый элемент массиву

// Task 1
// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.
// d1 = [33,'best', 66, 'best'];

let getData1 = document.querySelector('.i-1');
let getBtn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

let d1 = [33,'best', 66, 'best'];
let inputObj1 = ' ';

getBtn1.onclick = () => {
    console.log(getData1.value);
    d1.push(getData1.value);
    dataOut1.innerHTML += d1 + ' ';
    dataOut1.innerHTML += '<br>';
    getData1.value = '';
    console.log(d1);
    return d1;
}


// Task 2
// Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2

let getBtn2 = document.querySelector('.b-2');
let dataOut2 = document.querySelector('.out-2');

let d2 = [33,'best', 66, 'best'];

function showArr2() {
    d2.pop();
    dataOut2.innerHTML += d2 + ' ';
    dataOut2.innerHTML += '<br>';
    console.log(d2);
    return d2;
}

getBtn2.onclick = showArr2;


// Task 3
// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3

let getBtn3 = document.querySelector('.b-3');
let dataOut3 = document.querySelector('.out-3');

let d3 = [33,'best', 66, 'best'];

function showArr3() {
    console.log(d3);
    d3.shift();
    dataOut3.innerHTML += d3 + ' ';
    dataOut3.innerHTML += '<br>';
    console.log(d3);
    return d3;
}

getBtn3.onclick = showArr3;


// Task 4
// Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите из i-4, а затем выводит его (showArr) в .out-4

let getData4 = document.querySelector('.i-4');
let getBtn4 = document.querySelector('.b-4');
let dataOut4 = document.querySelector('.out-4');

let d4 = [33,'best', 66, 'best'];
let inputObj4 = ' ';

getBtn4.onclick = () => {
    console.log(getData4.value);
    d4.push(getData4.value);
    dataOut4.innerHTML += d4 + ' ';
    dataOut4.innerHTML += '<br>';
    getData4.value = '';
    console.log(d4);
    return d4;
}


// Task 5
// Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива берите из i-5, а затем выводит его (showArr) в .out-5

let getData5 = document.querySelector('.i-5');
let getBtn5 = document.querySelector('.b-5');
let dataOut5 = document.querySelector('.out-5');

let d5 = [33,'best', 66, 'best'];
let inputObj5 = ' ';

getBtn5.onclick = () => {
    console.log(getData5.value);
    d5.unshift(getData5.value);
    dataOut5.innerHTML += d5 + ' ';
    dataOut5.innerHTML += '<br>';
    getData5.value = '';
    console.log(d5);
    return d5;
}


// Task 6
// Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. Т.е. добавляет значение из i-6 как последний элемент в массив d6. Эмуляция, значит, что мы получим результат аналогичный методу push без применения его. Эмуляция заключается в присвоение значения как последнего элемента массива. Как вычислить индекс последнего элемента используя длину массива - вы знаете из предыдущего урока. Повторный запуск функции должен также приводить к добавлению элемента.
// d6 = ['test', 5, 12];

let getData6 = document.querySelector('.i-6');
let getBtn6 = document.querySelector('.b-6');
let dataOut6 = document.querySelector('.out-6');

let d6 = ['test', 5, 12];
let add6 = '';

getBtn6.onclick = () => {
    for(let i = 0; i < d6.length; i++) {
        d6[d6.length] = getData6.value;
        add6 = d6;
        console.log(add6);
        dataOut6.innerHTML += add6;
        getData6.value = '';
        dataOut6.innerHTML += '<br>';
        return add6;
    }
}


// Task 7
// Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. Эмулировать - получать результат аналогичный pop, но без применения pop. Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
// d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

let getBtn7 = document.querySelector('.b-7');
let dataOut7 = document.querySelector('.out-7');

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let del7 = ' ';

getBtn7.onclick = () => {
    if(d7.length > 0) {
        d7.length--;
        del7 = d7;
        console.log(del7);
        dataOut7.innerHTML += del7;
        dataOut7.innerHTML += '<br>';
        return del7;
    }
}


// Task 8
// Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 в начало массива d8.
// d8 = [2,'4', 12, 67, 'hello'];

let getData8 = document.querySelector('.i-8');
let getBtn8 = document.querySelector('.b-8');
let dataOut8 = document.querySelector('.out-8');

let d8 = [2,'4', 12, 67, 'hello'];
let add8 = [];

getBtn8.onclick = () => {
    for(let i = d8.length; i > 0; i--) {
        d8[i] = d8[i - 1];
    }
    d8[0] = getData8.value;
    console.log(d8);
    dataOut8.innerHTML = d8;
    getData8.value = '';
}


// Task 9
// Напишите функцию f9, которая эмулирует работу метода shift (удаляет первый элемент массива) - на примере массива d9.
// d9 = [100, 200, 300, 400, 700, 121];

let getBtn9 = document.querySelector('.b-9');
let dataOut9 = document.querySelector('.out-9');

let d9 = [100, 200, 300, 400, 700, 121];
let del9;

getBtn9.onclick = () => {
    for(let i = 0; i < d9.length; i++) {
        let remInd9 = d9[0];
        del9 = d9.filter(function(newArrd9) {
            return newArrd9 !== remInd9;
        })
    }
    console.log(del9);
    dataOut9.innerHTML = del9;
}


// Task 10
// Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10
// d10 = [3,14,15,92,6];

let getBtn10 = document.querySelector('.b-10');
let dataOut10 = document.querySelector('.out-10');

let d10 = [3, 14, 15, 92, 6];

getBtn10.onclick = () => {
    for(let i = 0; i < d10.length; i++) {
        dataOut10.innerHTML = d10.reverse();
    }
}


// Task 11
// Напишите функцию, которая получает число из input i-11, переводит в число, и с помощью метода indexOf проверяет наличие в массиве d11. Функция выводит в out-11 -1 если такого числа нет в массиве, либо его индекс в массиве.
// d11 = [2,3,4,5,6,7];

let getData11 = document.querySelector('.i-11');
let getBtn11 = document.querySelector('.b-11');
let dataOut11 = document.querySelector('.out-11');

let d11 = [2, 3, 4, 5, 6, 7];
let x11;

getBtn11.onclick = () => {
    x11 = Number(getData11.value);
    let index11 = d11.indexOf(x11);
    for(let i = 0; i < d11.length; i++) {
        if(index11 !== -1) {
            dataOut11.innerHTML = x11 + ' - такое число есть и его индекс равен: ' + index11;
            console.log(index11)
        } else {
            dataOut11.innerHTML = '-1';
        }
    }
    getData11.value = '';
}

// while(index != -1) {
//     dataOut11.innerHTML = index;
//     index = d11.indexOf(x, index + 1);
// }


// Task 12
// Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в массиве d12 (перебором). Если числа нет - выводит -1, если есть - его позицию в массиве.
// d12 = [6, 62, 60, 70, 1, 5]

let getData12 = document.querySelector('.i-12');
let getBtn12 = document.querySelector('.b-12');
let dataOut12 = document.querySelector('.out-12');

let d12 = [6, 62, 60, 70, 1, 5];
let x12;

getBtn12.onclick = () => {
    x12 = Number(getData12.value);
    console.log(x12);
    for(let i = 0; i < d12.length; i++) {
        // console.log(d12.findIndex(i => i == x12));
        if(d12.includes(x12)) {
            dataOut12.innerHTML = d12.findIndex(i => i == x12);
        } else {
            console.log('No such number');
            dataOut12.innerHTML = '-1';
        }
    }
    getData12.value = '';
}


// Task 13
// Напишите функцию f13, которая эмулирует работу метода reverse. Т.е. создает новый массив на основе d13 с обратным порядком элементов и выводит в out-13.
// d13 = [6, 0, 22, 1, 4, 76]

let getBtn13 = document.querySelector('.b-13');
let dataOut13 = document.querySelector('.out-13');

let d13 = [6, 0, 22, 1, 4, 76];
let rev13 = [];

getBtn13.onclick = () => {
    for(let i = d13.length - 1; i >= 0; i--) {
        rev13 += d13[i] + ' ';
        dataOut13.innerHTML = rev13;
    }
}


// Task 14
// Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.
// d14 = [];

let getData14 = document.querySelector('.i-14');
let getBtn14 = document.querySelector('.b-14');
let dataOut14 = document.querySelector('.out-14');

let d14 = [];

getBtn14.onclick = () => {
    d14.length = Number(getData14.value);
    for(let i = 0; i < d14.length; i++) {
        d14[i] = '1';
        console.log(d14[i]);
        dataOut14.innerHTML = d14;
    }
    getData14.value = '';
}


// Task 15
// Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15 (переводим в число), а потом - если нет - добавляет его в массив.
// d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

let getData15 = document.querySelector('.i-15');
let getBtn15 = document.querySelector('.b-15');
let dataOut15 = document.querySelector('.out-15');

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let add15 = ' ';

getBtn15.onclick = () => {
    let num15 = Number(getData15.value);
    console.log(num15);
    if(d15.includes(num15)) {
        dataOut15.innerHTML = d15;
    } else {
        d15.push(num15);
        add15 = d15;
        dataOut15.innerHTML = add15;
    }
    getData15.value = '';
}


// Task 16
// Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
// let d16 = []; let d161 = [5,6,7,8,9]; let d162 = [23,24,56,87];

let getBtn16 = document.querySelector('.b-16');
let dataOut16 = document.querySelector('.out-16');

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

getBtn16.onclick = () => {
    d16 = d161.concat(d162);
    console.log(d16);
    dataOut16.innerHTML = d16;
}


// Task 17
// Напишите функцию f17, которая эмулирует работу метода concat. Функция должна объедиять массивы d171 и d172 и записывать результат в d17. Для эмуляции используйт цикл.
// d17=[]; d171=['a', 'b', 'c', 'd']; d172=[1,2,3,4,5];

let getBtn17 = document.querySelector('.b-17');
let dataOut17 = document.querySelector('.out-17');

let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];

getBtn17.onclick = () => {
    d17 = [...d171, ...d172];
    console.log(d17);
    dataOut17.innerHTML = d17;
}


// Task 18
// Напишите функцию f18, которая получает значение из i-18 и проверяет есть ли такое значение в массиве d18 c использованием метода includes. Результат применения метода - выводится в .out-18.
// d18 = ['b', 'c', '45', 'e', 'z', 'y'];

let getData18 = document.querySelector('.i-18');
let getBtn18 = document.querySelector('.b-18');
let dataOut18 = document.querySelector('.out-18');

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];

getBtn18.onclick = () => {
    for(let i = 0; i < d18.length; i++) {
        let check18 = d18.includes(getData18.value);
        if(check18 == true) {
            dataOut18.innerHTML = 'Вы ввели: ' + getData18.value + ' Такие данные в массиве ЕСТЬ';
        } else {
            dataOut18.innerHTML = 'Вы ввели: ' + getData18.value + ' Таких данных в массиве НЕТ';
        }
    }
    getData18.value = '';
}


// Task 19
// Напишите фукнцию f19, которая выводит самую длинную строку maxString из массива d19 в out-19.
// d19 = ['Your','payment','method','will','automatically','be','charged','in','advance','every'];

let getBtn19 = document.querySelector('.b-19');
let dataOut19 = document.querySelector('.out-19');

let d19 = ['Your','payment','method','will','automatically','be','charged','in','advance','every'];
let maxArr19 = ' ';

getBtn19.onclick = () => {
    for(let i = 0; i < d19.length; i++) {
        if(d19[i].length > maxArr19.length) {
            maxArr19 = d19[i];
        }
        console.log(maxArr19);
        dataOut19.innerHTML = 'Самое длинное слово в массиве: ' + maxArr19;
    }
}


// Task 20
// Напишите функцию f20, которая применяет к массиву d20 метод join с параметрами и соединяет элементы массива в одну строку. Результат выводит в .out-20. Укажите метод так d20.join(''). Обратите внимание - между апострофами нет пробела!!!.
// d20 = [4,5,6,7,8,9,10]

let getBtn20 = document.querySelector('.b-20');
let dataOut20 = document.querySelector('.out-20');

let d20 = [4, 5, 6, 7, 8, 9, 10]
let out20 = ' ';

getBtn20.onclick = () => {
    out20 = d20.join('');
    dataOut20.innerHTML = out20;
}