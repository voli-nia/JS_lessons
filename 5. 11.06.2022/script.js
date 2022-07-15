//Циклы
//for
//while

//for(start; condition; counter) {} - сигнатура цикла for

for(let i = 0; i < 5; i++) {
    console.log('Condition: 0 <= i < 5 -> ' + i)
}

for(let i = 5; i > 0; i--) {
    console.log('Condition: 0 < i <= 5 -> ' + i)
}

for(let i = 0; i < 8; i = i + 2) {
    console.log(i)
}

const out = document.querySelector('#out');
for(let i = 0; i < 8; i = i + 1) {
    out.innerHTML += '4*/';
}

// let div = document.querySelector('.one');
// console.log(div);
// div.style.background = 'red'

let div = document.querySelectorAll('.one');
console.log(div); // NodeList(4)
for(let i = 0; i < div.length; i++) {
    console.log(div[i]);
    div[i].style.background = 'lightblue';
    div[i].onclick = Some;
}

function Some() {
    console.log('It works!')
}



let secondDiv = document.getElementsByClassName('one');
console.log(secondDiv) // HTMLCollection(4)

for(let i = 0; i < secondDiv.length; i++) {
    secondDiv[i].style.border = '2px solid black'
}


let thirdDiv = document.getElementsByTagName('div');
console.log(thirdDiv) // HTMLCollection(5)5

////////////////////////////////////////////////////////////
let button = document.querySelector('button');
let dataOut = document.querySelector('.out');

button.onclick = () => {
    let radio = document.querySelectorAll('input[type="radio"]');
    console.log(radio);
    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked)
 {
     console.log(radio[i].value)
 }    }
}




///////////////////////////
//Task 1
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
// 1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16

let dataOut1 = document.querySelector('.out-1');
let getBtn1 = document.querySelector('.b-1');

getBtn1.onclick = () => {
    for(let i = 1; i < 17; i++) {
        dataOut1.innerHTML += i + '_'
    }
}
getBtn1.addEventListener('click', function() {
    dataOut1.innerHTML += '<br>'
})



//Task2
// Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
// 12_14_16_18_20_22_24_26_28_30_32_34_36_38

let dataOut2 = document.querySelector('.out-2');
let getBtn2 = document.querySelector('.b-2');

getBtn2.onclick = () => {
    for(let i = 12; i < 39; i = i + 2) {
        dataOut2.innerHTML += i + '_'
    }
}
getBtn2.addEventListener('click', function() {
    dataOut2.innerHTML += '<br>'
})



//Task3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_

let dataOut3 = document.querySelector('.out-3');
let getBtn3 = document.querySelector('.b-3');

getBtn3.onclick = () => {
    for(let i = 25; i > 6; i--) {
        dataOut3.innerHTML += i + '_'
    }
}
getBtn3.addEventListener('click', function() {
    dataOut3.innerHTML += '<br>'
})



//Task4
// Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35

let dataOut4 = document.querySelector('.out-4');
let getBtn4 = document.querySelector('.b-4');

getBtn4.onclick = () => {
    for(let i = 77; i > 34; i = i - 3) {
        dataOut4.innerHTML += i + '_'
    }
}
getBtn4.addEventListener('click', function() {
    dataOut4.innerHTML += '<br>'
})



//Task5
// Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*

let dataOut5 = document.querySelector('.out-5');
let getBtn5 = document.querySelector('.b-5');

getBtn5.onclick = () => {
    for(let i = 1; i < 18; i++) {
        if(i % 2 == 0) {
            dataOut5.innerHTML += i + '_**'
        }else {
            dataOut5.innerHTML += i + '_*'
        }
    }
}
getBtn5.addEventListener('click', function() {
    dataOut5.innerHTML += '<br>'
})



//Task6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
// ******
// ******
// ******

let dataOut6 = document.querySelector('.out-6');
let getBtn6 = document.querySelector('.b-6');

getBtn6.onclick = () => {
    for(let i = 0; i < 6; i++) {
        dataOut6.innerHTML += '*';
        // dataOut6.innerHTML += '<br>';

    }
}
getBtn6.addEventListener('click', function() {
    dataOut6.innerHTML += '<br>'
})


//Task7
//Есть input .i-7 куда пользователь может ввести число больше 0
//(проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t-7, которая выводит в out-7 числа
// от введённого пользователем до 0 включительно
// Разделитель - знак подчёркивания. Если пользователь ввёл 4 и нажал на кнопку,
// мы получим:
// 4_3_2_1_0_
// Задача решается с помощью цикла

let input7 = document.querySelector('.i-7')
let dataOut7 = document.querySelector('.out-7');
let getBtn7 = document.querySelector('.b-7');

getBtn7.onclick = () => {
    for(let i = input7.value; i >= 0 ; i--) {
        dataOut7.innerHTML += i + '_';
        input7.value = ' ';
    }
}
getBtn7.addEventListener('click', function() {
    dataOut7.innerHTML += '<br>'
})


//Task8
//Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля
// (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8 запускается функция t8, которая выводит в .out-8 числа от первого введённого
// до второго включительно, с шагом 1.
// Разделитель - подчёркивание. Если пользователь ввёл 4 и 8 и нажал кнопку, мы получим
// 4_5_6_7_8_
// Задача решается с помощью цикла

let input81 = document.querySelector('.i-81')
let input82 = document.querySelector('.i-82')
let dataOut8 = document.querySelector('.out-8');
let getBtn8 = document.querySelector('.b-8');

getBtn8.onclick = () => {
    let x1 = input81.value;
    let x2 = input82.value;
    for(let i = x1; i <= x2 ; i++) {
        dataOut8.innerHTML += i + '_';
        input81.value = ' ';
        input82.value = ' ';
    }
}
getBtn8.addEventListener('click', function() {
    dataOut8.innerHTML += '<br>'
})


//Task9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа. По нажатию кнопки .b-9
// запускается функция t-9, которая выводит в .out-9 числа от меньшего введённого до большего включительно,
// с шагом 1.
// Разделитель - подчёркивание. Если пользователь ввёл 4 и 8 и нажал кнопку, мы получим
// 4_5_6_7_8_
// Если ввёл 8 и 6, то получим 6_7_8_

let input91 = document.querySelector('.i-91')
let input92 = document.querySelector('.i-92')
let dataOut9 = document.querySelector('.out-9');
let getBtn9 = document.querySelector('.b-9');

getBtn9.onclick = () => {
    let x = input91.value;
    let y = input92.value;
    if(x > y) {
        for(let i = y; i <= x; i++) {
            dataOut9.innerHTML += i + '_';
            input91.value = ' ';
            input92.value = ' ';
        }
    } else if (x < y) {
        for(let i = x; i <= y; i++) {
            dataOut9.innerHTML += i + '_';
            input91.value = ' ';
            input92.value = ' ';
        }
    }
}
getBtn9.addEventListener('click', function() {
    dataOut9.innerHTML += '<br>'
})


//Task10
//Кнопка .b-10 запускает функцию t10. Функция лжна выводить в .out-10 чётные года от 1950 до 1970
// включительно. Разделитель - подчёркивание. Задача решается через цикл, а чётность через шаг = 2

let dataOut10 = document.querySelector('.out-10');
let getBtn10 = document.querySelector('.b-10');

getBtn10.onclick = () => {
    for(let i = 1950; i <= 1970; i++) {
        if(i % 2 == 0) {
            dataOut10.innerHTML += i + '_';
        }
    }
}
getBtn10.addEventListener('click', function() {
    dataOut10.innerHTML += '<br>'
})



//Task11
//Кнопка .b-11 запускает функцию t11. Функция должна:
// - получить все div.div-11 в переменную divs11
// - перебрать их с помощью цикла. Обращение к div выглядит так: divs11[i].innerHTML
// - вывести в .out-11 содержимое каждого блока. Разделитель - подчёркивание
// В результате должно получиться так:
// one_3_4_two_

let dataOut11 = document.querySelector('.out-11');
let getBtn11 = document.querySelector('.b-11');

getBtn11.onclick = () => {
    let divs11 = document.querySelectorAll('input[name="intext"]');
    // console.log(divs11[i]);
    for(let i = 0; i < divs11.length; i++) {
        dataOut11.innerHTML += divs11[i].value + '_'
    }
}



//Task12
// Кнопка .b-12 запускает функцию t12. Функция должна:
// - получить все div.div-12
// - перебрать их с помощью цикла. Обращение к div выглядит так: elem[i]
// - применить к каждому elem[i].style.background = 'orange'

let getBtn12 = document.querySelector('.b-12');

getBtn12.onclick = () => {
    let divs12 = document.getElementsByClassName('twelve');
    for(let i = 0; i < divs12.length; i++) {
        divs12[i].style.background = 'orange';
    }
}



//Task13
// С помощью цикла присвойте всем input .i-13 value равное 1 для первого,
// 2 для второго и 3 для третьего

let dataOut13 = document.querySelector('.out-13');
let getBtn13 = document.querySelector('.b-13');

getBtn13.onclick = () => {
    let changeValue13 = document.querySelectorAll('input[name="in"]');
    for(let i = 0; i < changeValue13.length; i++) {
        changeValue13[0].value = '1';
        changeValue13[1].value = '2';
        changeValue13[2].value = '3';
    }
}


//Task14
// Кнопка .b-14 запускает функцию t14. Функция должна:
// - получить все input.i-14
// - перебрать их с помощью цикла. Обращение к div выглядит так: elem[i]
// - вывести в .out-14 value выбранного. Проверить выбран ли элемент, можно с помощью
// elem[i].checked

let dataOut14 = document.querySelector('.out-14');
let getBtn14 = document.querySelector('.b-14');

getBtn14.onclick = () => {
    let checkData14 = document.querySelectorAll('input[name="rb14"]');
    for(let i = 0; i < checkData14.length; i++) {
        if(checkData14[i].checked) {
            dataOut14.innerHTML = checkData14[i].value;
        }
    }
}



//Task15
// Кнопка .b-15 запускает функцию t15. Функция должна выводить следующую
// последовательность в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_

let dataOut15 = document.querySelector('.out-15');
let getBtn15 = document.querySelector('.b-15');

getBtn15.onclick = () => {
    for(let i = 10, j = 0; i >= 0, j <= 10; i--, j++) {
        dataOut15.innerHTML += i + '_' + j + '_';
    }
}
getBtn15.addEventListener('click', function() {
    dataOut15.innerHTML += '<br>'
})