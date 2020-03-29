'use strict';

let quest  = '     qwertyuiop qwertyuiop qwertyuiop   ';
let someFunc = function(argument){
    if (isNaN(argument)) {
        let arg = argument.trim();
        if (arg.length > 30) {
            console.log('Больше 30');
            console.log(arg.substring(0, 30) + '...');
        } else {
            console.log(arg);
        }
    } else {
        console.log('Это не строка!');
    }
};

someFunc(quest);