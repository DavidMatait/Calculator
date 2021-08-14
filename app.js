//use strict to prevent using what is not variables
(function() {

  "use strict";

  // Shortcut to get elements by calling the ID pass which if passed returns single item
  const el = function(item) {
    if (item.charAt(0) === "#") {
      return document.querySelector(item); 
    }else{
      return document.querySelectorAll(item);
    }
  };

  // Variables
   let viewer = el("#viewer");
   let equals = el("#equals");
   let nums = el(".num");
   let ops = el(".ops"); 
   let theNum = ""; 
   let oldNum = "";
   let resultNum; 
   let operator; 

  // call the number (using attribute) and display it
  const setNum = function() {
    if (resultNum) {
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else { 
      theNum += this.getAttribute("data-num");
    }
    viewer.innerHTML = theNum; 
  };

  // call operator and pass current number to old number
  const moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");
    equals.setAttribute("data-result", ""); 
  };

  // Equal operator and result calculation
  const displayNum = function() {

    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Switch function to perform calculation
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
    }

    // Error(e.g. double press on operators or dividing from 0) and infinity handling
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { 
        resultNum = "Infinity!";
      } else {
        resultNum = "Stop dividing from 0, this does not work!";
      }
    }

    // Display result and reset old number
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Limit output length 
    if(viewer.innerHTML.length>=6){
      viewer.innerHTML = viewer.innerHTML.substr(0,6);
    }

  };

  // Clear button
  const clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

   // Clear button
   el("#clear").onclick = clearAll;
 
  // Click number
  for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  // Click operator
  for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  // Equal sign operator
  equals.onclick = displayNum;

  // +/- button

  negative.onclick=PlusMinus;

}());