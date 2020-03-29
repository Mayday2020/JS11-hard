'use strict';

let lang = confirm('ru or en?'),
    weekRu = ['понедельник', ' вторник', ' среда', ' четверг', ' пятница', ' суббота', ' воскресенье'],
    weekEn = ['monday', ' tuesday', ' wednesday', ' thursday', ' friday', ' saturday', ' sunday'],
    weeks = [weekRu, weekEn];
console.log('lang: ', lang);

        // Через IF ELSE
/*
if (lang) {
    lang = 'ru';
    console.log('lang: ', lang);
    alert(weekRu);
} else {
    lang = 'en';
    console.log('lang: ', lang);
    alert(weekEn);
}
        // Через SWITCH CASE
switch (lang){
    case true:
        lang = 'ru';
        console.log('lang: ', lang);
        alert(weekRu);
        break;
    case false:
        lang = 'en';
        console.log('lang: ', lang);
        alert(weekEn);
}
*/
        // Через тернарный оператор и многомерный массив
let result = lang ? alert(weeks[0]) : alert(weeks[1]);

        // Вторая часть задания
const namePerson = prompt('who are you?');
namePerson === 'Артем' ? console.log('директор') :
     namePerson === 'Максим' ? console.log('преподаватель') :
     console.log('студент');