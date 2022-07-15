// const button = document.querySelector('button');
// const span = document.querySelector('span');

// button.onclick = () => {
//     // console.log(document.querySelector('#i-1').value);
//     //button.style.backgroundColor = document.querySelector('#i-1').value;
// }

// document.querySelector('#i-1').oninput = () => {
//     console.log(document.querySelector('#i-1').value);
//     span.innerHTML = document.querySelector('#i-1').value;
// }

// document.querySelector('#b-1').onclick = () => {
//     let checkBox = document.querySelector('#i-2');
//     console.log(document.querySelector('#i-2').value);
//     console.log(checkBox.checked);
//     if(checkBox.checked) {
//         console.log('Check!');
//     } else {
//         console.log('Uncheck!');
//     }
// }

const form = document.querySelector('form');

document.querySelector('#b_1').onclick = (e) => {
    e.preventDefault();
//    console.log(document.querySelector('#t-1').value);
    // let text = document.querySelector('#t-1');
    // text.value = 'Type here';
    // console.log(text.value);
    console.log(form);
    console.log(form.elements.t_i_in.value);
    console.log(form.elements.i_3.value);
}

//////

//Task1
let getBtn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

getBtn1.onclick = () => {
    dataOut1.innerHTML = '1';
}

//Task2
let input2 = document.querySelector('.i-2');
let dataOut2 = document.querySelector('.out-2');

input2.onclick = () => {
    dataOut2.innerHTML = '2';
}

//Task3
let par3 = document.querySelector('.p-3');
let dataOut3 = document.querySelector('.out-3');

par3.onclick = () => {
    dataOut3.innerHTML = '3';
}


//Task4 NOT DONE!!!
let getBtn4 = document.querySelector('.b-4');
let checkBox4 = document.querySelector('#i-4').value;
let dataOut4 = document.querySelector('.out-4');

getBtn4.onclick = () => {
    if(checkBox4.checked) {
        console.log('True');
        dataOut4.innerHTML = 'True';
    } else {
        console.log('False');
        dataOut4.innerHTML = 'False';
    }
}

// document.querySelector('#b-1').onclick = () => {
//     let checkBox = document.querySelector('#i-2');
//     console.log(document.querySelector('#i-2').value);
//     console.log(checkBox.checked);
//     if(checkBox.checked) {
//         console.log('Check!');
//     } else {
//         console.log('Uncheck!');
//     }
// }


//Task5

//Task6

//Task7
//При нажатии на кнопку вывести в .out-71 value прописанное в input .i-7.
// В .out-72 вывести 1 если длина пароля больше иди равна 6 и 0 - если меньше.
// Для подсчёта кол-ва символов в строке использовать length.