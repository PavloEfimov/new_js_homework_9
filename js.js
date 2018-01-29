/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};
var main = lang.en.split('');
var tops = main.slice(0, 12);
var middle = main.slice(12, 23);
var bottom = main.slice(23);

const html = document.querySelector('#menu').textContent.trim();

const compiled = _.template(html);

const result = compiled(main);

let htmlString = '';


const container = document.querySelector('#menu-container');

container.innerHTML = result;

// реализована подсветка на полсекунды нажатой клавиши
// нот не было по условиям задачи,можно реализовать массивом объектов{клавиша,нота}

const buttons = Array.from(document.querySelectorAll("button"));
const keys = lang.en.split("");


window.addEventListener("keydown", callback);


function callback() {

    buttons.map((n, i) => {
        if (event.key == buttons[i].textContent.trim()) {
            buttons[i].classList.add('keyboard__btn--active');
            setTimeout(() => {
                buttons[i].classList.remove('keyboard__btn--active');
            }, 500);
        }
    })
}