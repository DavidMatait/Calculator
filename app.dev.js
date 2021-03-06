"use strict";

//use strict to prevent using what is not variables
(function () {
  "use strict"; // Shortcut to get elements by calling the ID pass which if passed returns single item

  var el = function el(item) {
    if (item.charAt(0) === "#") {
      return document.querySelector(item);
    } else {
      return document.querySelectorAll(item);
    }
  }; // Variables


  var viewer = el("#viewer");
  var equals = el("#equals");
  var nums = el(".num");
  var ops = el(".ops");
  var dot = el("#dot");
  var theNum = "";
  var oldNum = "";
  var resultNum;
  var operator; // call the number (using attribute) and display it

  var setNum = function setNum() {
    if (resultNum) {
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else {
      theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum.substr(0, 8);
  }; // call operator and pass current number to old number


  var moveNum = function moveNum() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");
    equals.setAttribute("data-result", "");
  }; // Equal operator and result calculation


  var displayNum = function displayNum() {
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum); // Switch function to perform calculation

    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

      case "percentage":
        resultNum = oldNum / 100;
        break;

      case "root":
        resultNum = Math.sqrt(oldNum);
        break;
      // If equal is pressed without an operator, keep the number

      default:
        resultNum = theNum;
    } // Error(e.g. double press on operators or dividing from 0) and infinity handling


    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        resultNum = "Infinity";
      } else {
        resultNum = "Nope!";
      }
    } // Display result and reset old number


    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum); // Limit output length 

    if (viewer.innerHTML.length >= 6) {
      viewer.innerHTML = viewer.innerHTML.substr(0, 8);
    }
  }; // Clear button


  var clearAll = function clearAll() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  }; // Clear button


  el("#clear").onclick = clearAll; // Click number

  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  } // Click operator


  for (var _i = 0, _l = ops.length; _i < _l; _i++) {
    ops[_i].onclick = moveNum;
  } // Equal sign operator


  equals.onclick = displayNum;
})();