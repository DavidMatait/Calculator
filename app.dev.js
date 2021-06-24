"use strict";

var button = document.querySelectorAll('button');
var resultScreen = document.getElementsByClassName('div__result');
var buttonX = document.getElementsByClassName('btn__orangeX')[0];
var buttonDivide = document.getElementsByClassName('btn__orange-dot')[0];
var buttonMinus = document.getElementsByClassName('btn__orange-')[0];
var buttonPlus = document.getElementsByClassName('btn__orange-plus')[0];
var buttonEqual = document.getElementById('btn__orange-equal');
var button0 = document.getElementsByClassName('0')[0];
var button1 = document.getElementsByClassName('1')[0];
var button2 = document.getElementsByClassName('2')[0];
var button3 = document.getElementsByClassName('3')[0];
var button4 = document.getElementsByClassName('4')[0];
var button5 = document.getElementsByClassName('5')[0];
var button6 = document.getElementsByClassName('6')[0];
var button7 = document.getElementsByClassName('7')[0];
var button8 = document.getElementsByClassName('8')[0];
var button9 = document.getElementsByClassName('9')[0];
button0.addEventListener('click', function (e) {
  button0.classList.add('new');
  var newResult = [button0.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button1.addEventListener('click', function (e) {
  button7.classList.add('new');
  var newResult = button1.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button2.addEventListener('click', function (e) {
  button2.classList.add('new');
  var newResult = button2.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button3.addEventListener('click', function (e) {
  button3.classList.add('new');
  var newResult = button3.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button4.addEventListener('click', function (e) {
  button4.classList.add('new');
  var newResult = button4.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button5.addEventListener('click', function (e) {
  button5.classList.add('new');
  var newResult = button5.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button6.addEventListener('click', function (e) {
  button6.classList.add('new');
  var newResult = button6.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button7.addEventListener('click', function (e) {
  button7.classList.add('new');
  var newResult = button7.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button8.addEventListener('click', function (e) {
  button8.classList.add('new');
  var newResult = button8.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
button9.addEventListener('click', function (e) {
  button9.classList.add('new');
  var newResult = button9.innerHTML;
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML = newResult;
});
buttonX.addEventListener('click', function (e) {});