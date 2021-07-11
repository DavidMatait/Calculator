

//Consts

const resultScreen=document.querySelector('.p');
const operators=document.querySelectorAll('.btn__orange');
console.log(operators);
let clear=document.getElementById('clear');
const numb=document.querySelectorAll('.num');
console.log(numb);
//Variables

 Display=[];
 
 //Number button


 for (let i = 0; i < numb.length; i++) {
  numb[i].addEventListener("click", function() {

       Display.push(numb[i].innerHTML)
     resultScreen.innerHTML=Display.join('')
     console.log(resultScreen.innerHTML);
  });
}
//Ops button

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {

  Display.push(operators[i].innerHTML)
   let news = Display.join('')
     resultScreen.innerHTML=news
     console.log(resultScreen.innerHTML);
  });
}




