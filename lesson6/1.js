'use strict';



const isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomNum = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCounter = function() {
    let counter = 0;
    return function() {
        return counter++;
    }
};


const gameRandom = function(attemps) {
    const randomNum = getRandomNum(1,100);
    console.log(randomNum);
    const counter = getCounter();

    return (function checkNumber() {
        const count = counter();
        const userNumber = prompt('Попробуй угадать число');
        console.log(count);
        if (isNum(userNumber)) {
         let repeat = false;
            if (count < attemps) {
                const num = +userNumber;
                if (num > randomNum) {
                    alert('Загаданое число меньше');
                    return checkNumber();
                }
                if (num < randomNum) {
                    alert('Загаданное число больше');
                    return checkNumber();
                }
                const repeat = confirm('вы угадали, хотите еще?');
                if (repat) gameRandom(attemps);
                alert('Да новых встреч');  
            } else {
                const repeat = confirm('Количество попыток закончилось! хотите сыграть еще?')
            }
        } else {
            if (userNumber !== null) {
                alert('Введи число!');
                checkNumber();
            }  
           
        }
    }());

};

gameRandom(10);

