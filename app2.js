





const screen = document.getElementsByClassName('div__result'); // Calculator screen where result is displayed
const equals = el("#equal"); // Equal button
const nums = el(".num"); // List of numbers
const ops = el(".btn__orange"); // List of operators
const theNum = " "; // Current number
const oldNum = " "; // First number
const resultNum; // Result
const operator; // Batman


const setNum = function() {
  if (resultNum) { // If a result was displayed, reset number
    theNum = this.getAttribute("data-num");
    resultNum = "";
  } else { // Otherwise, add digit to previous number (this is a string!)
    theNum += this.getAttribute("data-num");
  }
