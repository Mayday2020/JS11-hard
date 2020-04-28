'use strict';

let arr = ['123', '456', '789', '547', '258', '369', '659'];

let usl1 = 2,
    usl2 = 4;

let circle = function() {
    for (let i = 0; i < arr.length; i++){
        if (+arr[i][0] === usl1 || +arr[i][0] === usl2){
            console.log(arr[i]);
        }
    }
};
circle();


let arrNumber = [];
let table = function() {
    for (let i = 2; i <= 100; i++){
        
        let k,
            count = 0;
        for (let j = 2; j <= i; j++){
            if (j === i) {
                arrNumber.push(j);
                break;
            }
            k = i % j;
            
            if (k === 0) {
                count++;
            }
            if (count >= 1){
                break;
            }
        }
    }
    for (let i = 0; i <= arrNumber.length; i++){

        console.log(arrNumber[i] + ': Делители этого числа: 1 и ' + arrNumber[i]);
    }
};

table();

