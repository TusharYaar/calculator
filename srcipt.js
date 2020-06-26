var operator = 0;
var result = 0;
var input = 0;

function clearall() {
  operator = 0;
  result =0;
  input = 0;
  document.getElementById('disbox').textContent = '';
  document.getElementById('disbox2').textContent = 0;
}


function perform(num) {
  console.log(num);
  if (operator==0)
  {
    operator=num;
  }

  if (result == 0) {
    result = input;
  }
  else {
  if (operator==1) {
        result += input;
}
else if (operator==2) {
      result -= input;
}
else if (operator==3) {
      result /= input;
}
else if (operator==4) {
      result *= input;
}


    operator = num;
  }
  input = 0;
  display();
}




function operate(num) {
  if (num > 9) {
    input *= num;
  }
  else {
    input = input * 10 + num;
  }
  display();
}


function equals() {
  perform(0);
  document.getElementById('disbox').textContent = '';
  document.getElementById('disbox2').textContent = result;
}



function display() {
document.getElementById('disbox2').textContent = result;
switch (operator) {
  case 1:
  console.log("addition");
  symbol = "+";
    break;
  case 2:
  console.log("subtraction");
    symbol = "-";
      break;
      case 3:
      console.log("divide");
      symbol = "/";
        break;
  case 4:
  console.log("multiply");
        symbol = "x";
          break;
          default:
          symbol = "";
}
  document.getElementById('disbox').textContent = "(" + symbol + ")  " + input;
  if (result==0){
      document.getElementById('disbox').textContent = input;
      document.getElementById('disbox2').textContent = input;

  }
}

function cases(ca) {
  switch (ca) {
    case "00":
      input *= 100;
      display();
      break;
    case ".":
    window.alert("abhi ni chalta");
      break;

  }
}



document.getElementById('but1').onclick = function() {
  operate(1);
}
document.getElementById('but2').onclick = function() {
  operate(2);
}
document.getElementById('but3').onclick = function() {
  operate(3);
}
document.getElementById('but4').onclick = function() {
  operate(4);
}
document.getElementById('but5').onclick = function() {
  operate(5);
}
document.getElementById('but6').onclick = function() {
  operate(6);
}
document.getElementById('but7').onclick = function() {
  operate(7);
}
document.getElementById('but8').onclick = function() {
  operate(8);
}
document.getElementById('but9').onclick = function() {
  operate(9);
}
document.getElementById('but0').onclick = function() {
  operate(10);
}
document.getElementById('but00').onclick = function() {
  operate(100);
}
document.getElementById('but11').onclick = function() {
  perform(1);
}
document.getElementById('but12').onclick = function() {
  perform(2);
}
document.getElementById('but13').onclick = function() {
  perform(3);
}
document.getElementById('but14').onclick = function() {
  cases('.');
}
document.getElementById('butx').onclick = function() {
  perform(4);
}
document.getElementById('bute').onclick = function() {
  equals();
}
document.getElementById('butc').onclick = function() {
  clearall();
}
document.getElementById('butc').ondblclick = function() {
  window.alert("Hogaya bs, 1 baar me ho jata hai");
}
