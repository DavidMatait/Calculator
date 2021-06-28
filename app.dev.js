"use strict";

var resultScreen = document.getElementsByClassName('div__result');
var operators = document.querySelectorAll('.btn__orange.innerHTML');
var clear = document.getElementById('clear');
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
clear.addEventListener('click', function (e) {
  var newResult = [" "];
  resultScreen.innerHTML = newResult;
});
operators.forEach(function (operator) {
  operator.addEventListener('click', function (e) {
    resultScreen.innerHTML += e.target.innerHTML;
  });
});
button0.addEventListener('click', function (e) {
  button0.classList.add('new');
  var newResult = [button0.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button1.addEventListener('click', function (e) {
  button1.classList.add('new');
  var newResult = [button1.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button2.addEventListener('click', function (e) {
  button2.classList.add('new');
  var newResult = [button2.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button3.addEventListener('click', function (e) {
  button3.classList.add('new');
  var newResult = [button3.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button4.addEventListener('click', function (e) {
  button4.classList.add('new');
  var newResult = [button4.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button5.addEventListener('click', function (e) {
  button5.classList.add('new');
  var newResult = [button5.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button6.addEventListener('click', function (e) {
  button6.classList.add('new');
  var newResult = [button6.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button7.addEventListener('click', function (e) {
  button7.classList.add('new');
  var newResult = [button7.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button8.addEventListener('click', function (e) {
  button8.classList.add('new');
  var newResult = [button8.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
});
button9.addEventListener('click', function (e) {
  button9.classList.add('new');
  var newResult = [button9.innerHTML];
  var resultScreen = document.querySelector('p');
  resultScreen.innerHTML += newResult;
}); //buttonFunction.addEventListener('click',(e)=>{
//let newResult =[buttonFunction.innerHTML];
//const resultScreen=document.querySelector('p');
//resultScreen.innerHTML=newResult;
//})
//create new variable as array to store resultScreen data           
//when (=) is pressed split array (commas) and convert to mathematical equation 
// For example [1,+,5,-,4] -> 1+5-4 -> assign to variable which when display result of equation on the screen
//resultScreen=addResult.split(',') or similar ->extract array to make it plain which is basically math function
//add the answer of math function to result screen
//split array -> make it as mathematical function -> display result on = being pressed
//additional-> c to clear the screen (seperate function)
//if(resultSceen != 0){resultScreen=0} or similar
// +/- to make positive and negative numbers
// convert either result or button to +/- i.e. if result is 5 it can become -5 after pressing +/- button
// [5,+,9]->[14]-> press +/- becomes [-,14] or [5] -> +/- -> [-,5] -> +4 ->[-,5,+,4] -> [-1]
// % makes number n/100 
//takes result or current number in array and divides from 100