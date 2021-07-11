"use strict";

//Consts
var resultScreen = document.querySelector('.p');
var operators = document.querySelectorAll('.btn__orange');
console.log(operators);
var clear = document.getElementById('clear');
var numb = document.querySelectorAll('.num');
console.log(numb); //Variables

Display = []; //Number button

var _loop = function _loop(i) {
  numb[i].addEventListener("click", function () {
    Display.push(numb[i].innerHTML);
    resultScreen.innerHTML = Display.join('');
    console.log(resultScreen.innerHTML);
  });
};

for (var i = 0; i < numb.length; i++) {
  _loop(i);
} //Ops button


var _loop2 = function _loop2(_i) {
  operators[_i].addEventListener("click", function () {
    Display.push(operators[_i].innerHTML);
    var news = Display.join('');
    resultScreen.innerHTML = news;
    console.log(resultScreen.innerHTML);
  });
};

for (var _i = 0; _i < operators.length; _i++) {
  _loop2(_i);
}