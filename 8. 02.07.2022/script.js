
// for (let i = 0; i < 6; i++) {
//     console.log(i)
// }


////////////////////////////////////////////


// let j = 0;
// while(j < 5) {
//     // j++;
//     console.log("j: " + j);
//     // if(j == 3 ) continue; //вечный цикл - не включать!!!
//     j++;
// }



/////////////////////////////////////////////

// 0 + ... + 10

let sum = 0;
let k = 0;

while(k <= 10) {
    sum = sum + k;
    k++;
}
//console.log('sum: ' + sum)


/////////////////////////////////////////////


let outDiv1 = document.querySelector('.out1');
let m = 0;
let outStr = '';

while(m < 5) {
    let k1 = 0;
    while(k1 < 4) {
        outStr += '*';
        k1++
    }
    outStr += '<br>';
    m++;
}
outDiv1.innerHTML = outStr;


///////////////////////////////////////////////


let outDiv2 = document.querySelector('.out2');

let m1 = 0;
let outStr1 = '';
let flag1 = 3; // количество нулей (начальное, откуда идёт отсчёт)

while(m1 < 4) { // количество строк
    let k1 = 0;
    while(k1 < 5) { // количество символов в строке
        if(k1 < flag1) {
            outStr1 += '0';
        } else {
            outStr1 += '*'
        }
        k1++;
    }
    flag1--;
    outStr1 += '<br>';
    m1++;
}
outDiv2.innerHTML = outStr1;


////////////////////////////////////////////////////


// Task1
// Кнопка b-1 запускает функцию t-1. Функция должна выводить в .out-1
// все числа от 1 до 50. Раздеоитель - нижнее подчёркивание_
// 1_2_3_4_5_6_7_8_9_ ... 49_50_

let getBtn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

getBtn1.onclick = function() {
    for(let i = 0; i <= 50; i++) {
    // console.log(i + '_');
    dataOut1.innerHTML += i + '_';
    }
    dataOut1.innerHTML += '<br>';
}



// Task2
// Кнопка b-2 запускает функцию t-2. Функция должна выводить в .out-2
// все числа от 2 до 46 с шагом 2. Разделитель - нижнее подчёркивание _
// 2_4_6_8_10_ ... 44_46_
// Задача решается с помощью цикла while

let getBtn2 = document.querySelector('.b-2');
let dataOut2 = document.querySelector('.out-2');

getBtn2.onclick = function() {
    for(let i = 2; i <= 46; i++) {
        if(i % 2 == 0) {
            dataOut2.innerHTML += i + '_';
        }
    }
    dataOut2.innerHTML += '<br>';
}



// Task3
// Кнопка b-3 запускает функцию t-3. Функция должна выводить в .out-3
// цифры от 25 до 7 с шагом 1. Разделитель - нижнее подчёркивание _
// 25_24_23_22_21_20_ ... 10_9_8_7_
// Задача решается с помощью цикла while

let getBtn3 = document.querySelector('.b-3');
let dataOut3 = document.querySelector('.out-3');

getBtn3.onclick = function() {
    let i = 25;
    let str = '';
    while(i >= 7) {
        //console.log(i + '_');
        str +=  i + '_';
        i--;
    }
    dataOut3.innerHTML += str;
    dataOut3.innerHTML += '<br>';
}



// Task4 NOT DONE!!!
// Кнопка b-4 запускает функцию t-4. Функция должна выводить в .out-1
// строку вида
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 с шагом 3. Разделитель - нижнее подчёркивание _
// Задача решается с помощью цикла while

let getBtn4 = document.querySelector('.b-4');
let dataOut4 = document.querySelector('.out-4');

function t_4() {
    let x = 77;
    let str = '';
    while(x >= 35) {
        str += x + '_';
        x = x - 3;
    }
    dataOut4.innerHTML = str;
}
getBtn4.addEventListener('click', t_4);



// Task5
// Конпка .b-5 запускает функцию t5. Функция должна выводить 
// в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// От 1 до 17 с шагом 1. Разделитель - знак подчёркивания и * - если
// число нечётное и ** - если чётное. Задачу решить с помощью цикла while

let getBtn5 = document.querySelector('.b-5');
let dataOut5 = document.querySelector('.out-5');

getBtn5.onclick = function() {
    let i = 1;
    let str = '';
    while(i <= 17) {
        if(i % 2 == 0) {
            str += `${i}` + '_**';
        } else {
            str += `${i}` + '_*';
        }
        str += '';
        i++;
    }
    dataOut5.innerHTML += str;
    dataOut5.innerHTML += '<br>';
}



// Task6
// Кнопка .b-6 запускает функцию t6. Функуия должна выводить в .out-6
// строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит
// 6 звёздочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла while вводит
// пользователь в .i-6

let data6 = document.querySelector('.i-6');
let getBtn6 = document.querySelector('.b-6');
let dataOut6 = document.querySelector('.out-6');

getBtn6.onclick = function() {
    let strCount = 0;
    let x = data6.value;
    let str = '';

    while(strCount < x) {
        let y = 0;
        while(y < 6) {
            str += '*';
            y++;
        }
        str += '<br>';
        strCount++;
    }
    dataOut6.innerHTML += str;
    dataOut6.innerHTML += '<br>';
}



// Task7
// Есть инпут .i-7 куда пользователь может ввести число больше нуля (проверок
// не делаем, принимаем как факт). По нажатии кнопки .b-7 запускается функция f7,
// которая выводит в .out-7 числа от введённого пользователем до нуля включительно.
// Разделитель - знак подчёркивания _
// Если пользователь ввёл 4 и нажал на кнопку, то мы получим:
// 4_3_2_1_0_
// Задача решается с помощью цикла while

let data7 = document.querySelector('.i-7');
let getBtn7 = document.querySelector('.b-7');
let dataOut7 = document.querySelector('.out-7');

getBtn7.onclick = function() {
    let x = data7.value;
    let str = '';

    while(x >= 0) {
        str += `${x}` + '_';
        x--;
    }
    dataOut7.innerHTML += str;
    dataOut7.innerHTML += '<br>';
}



// Task8
// Есть инпут .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок
// не делаем, принимаем как факт). Считаем что второе число всегда больше первого.
// По нажатии кнопки .b-8 запускается функция f8, которая выводит в .out-8 числа от первого
// введённого пользователем до второго (включительно оба) с шагом 1.
// Разделитель - знак подчёркивания _
// Если пользователь ввёл 4 и 8 и нажал на кнопку, то мы получим:
// 4_5_6_7_8_
// Задача решается с помощью цикла while 

let data81 = document.querySelector('.i-81');
let data82 = document.querySelector('.i-82');
let getBtn8 = document.querySelector('.b-8');
let dataOut8 = document.querySelector('.out-8');

getBtn8.onclick = function() {
    let x = data81.value;
    let y = data82.value;
    let str = '';

    if(x < y) {
        while(x <= y) {
        str += x + '_';
        x++;
        } 
    }else if(y < x){
       while(y <= x) {
        str += x + '_';
        x--;
        } 
    }
    
    dataOut8.innerHTML += str;
    dataOut8.innerHTML += '<br>';
}


// Task9
// Есть инпут .i-91 и .i-92 куда пользователь может ввести числа
// По нажатии кнопки .b-9 запускается функция f9, которая выводит в .out-9 числа
// от меньшего введённого до большего (включительно оба) с шагом 1.
// Разделитель - знак подчёркивания _
// Если пользователь ввёл 4 и 8 и нажал на кнопку, то мы получим:
// 4_5_6_7_8_
// Если ввел 8 и 6, то получим:
// 6_7_8_
// Подсказка: вначале сделать проверку и, при необходимости, поменять местами
// значания в переменных, а потом запускаем цикл while

let data91 = document.querySelector('.i-91');
let data92 = document.querySelector('.i-92');
let getBtn9 = document.querySelector('.b-9');
let dataOut9 = document.querySelector('.out-9');

getBtn9.onclick = function() {
    let x = data91.value;
    let y = data92.value;
    let str = '';

    if(x < y) {
        while(x <= y) {
            str += `${x}` + '_';
            x++;
        }
    } else if(y < x) {
        while(y <= x) {
            str += `${y}` + '_';
            y++;
        }
    }
    
    dataOut9.innerHTML += str;
    dataOut9.innerHTML += '<br>';
}



// Task10
// Конпка .b-10 запускает функцию t10. Функция должна выводить в .out-10
// чётные года от 1950 до 1966 включительно. Разделитель - знак подчёркивания
// Задачу решить с помощью цикла while, а чётность - через шаг, равный 2

let getBtn10 = document.querySelector('.b-10');
let dataOut10 = document.querySelector('.out-10');

getBtn10.onclick = function() {
    let x = 1950;
    let str = '';

    while(x <= 1966) {
        if(x % 2 == 0) {
            str += x + '_';
        } 
        x++;
        dataOut10.innerHTML = str;
    }

    dataOut10.innerHTML += '<br>';
}



// Task11
// Кнопка b-11 запускает функцию t11. Функция должна:
// получить все div.div-11
// перебрать их с помощью цикла while. Обращение к div выглядит так: ваша_переменная[i]
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчёркивания
// В результате должно получиться так:
// one_3_4_two

let getBtn11 = document.querySelector('.b-11');
let dataOut11 = document.querySelector('.out-11');


getBtn11.onclick = function() {
    let allDivs11 = document.querySelectorAll('input[name="getvalue"]');
    let counter = 0;
    let str = '';

    while(counter < allDivs11.length) {
        str += allDivs11[counter].value + '_';
        counter++;
        console.log(str);
    }
    dataOut11.innerHTML += str;
    dataOut11.innerHTML += '<br>';
}



// Task12
// Кнопка .b-12 запускает функцию t12. Функция должна:
// получить все div.div-12
// перебрать их с помощью цикла while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = 'orange'

let getBtn12 = document.querySelector('.b-12');
let dataOut12 = document.querySelector('.out-12');


getBtn12.onclick = function() {
    let allDivs12 = document.getElementsByClassName('orange');
    let counter = 0;
    let str = '';

    while(counter < allDivs12.length) {
        str += allDivs12[counter].style.background = 'orange';
        counter++;
        console.log(str);
    }
}


// Task13
// Кнопка .b-13 запускает функцию t13. Функция должна:
// получить все input.i-13
// перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причём value первого должно равняться 1,
// второго - 2, третьего - 3...

let getBtn13 = document.querySelector('.b-13');
let dataOut13 = document.querySelector('.out-13');


getBtn13.onclick = function() {
    let allDivs13 = document.querySelectorAll('input[name="in"]');
    let counter = 0;

    while(counter < allDivs13.length) {
        allDivs13[0].value = '1';
        allDivs13[1].value = '2';
        allDivs13[2].value = '3';
        counter++;
    }
}



// Task14
// Кнопка .b-14 запускает функцию t14. Функция должна:
// получить все input.i-14
// перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked

let getBtn14 = document.querySelector('.b-14');
let dataOut14 = document.querySelector('.out-14');

getBtn14.onclick = function() {
    let allDivs14 = document.querySelectorAll('input[name="ib14"]');
    let counter = 0;
    let str = '';

    while(counter < allDivs14.length) {
        if(allDivs14[counter].checked) {
            str += allDivs14[counter].value;
        } else {
            console.log('cycle');
        }
        counter++;
    }
    
    dataOut14.innerHTML += str;
    dataOut14.innerHTML += '<br>';
}


// Task15
// Кнопка .b-15 запускает функцию t15. Функция должна выводить следующую последовательность
// в .out-15
// 77_88_99_77_88_99_77_88_99_
// Для вывода использовать цикл while

let getBtn15 = document.querySelector('.b-15');
let dataOut15 = document.querySelector('.out-15');

getBtn15.onclick = function() {
    let data = '77_88_99_'
    let counter = 0;
    let str = '';

    while(counter < 2) {
        str += data;
        counter++;
        dataOut15.innerHTML += str;
    }
    dataOut15.innerHTML += '<br>';     
}
