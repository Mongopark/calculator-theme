import React, { useState } from 'react';



const Calculator = () => {
  var click=2;
  const [display, setDisplay] = useState('0');


  const handleChangeTheme=(e)=>{
    click++;
    var appTheme=document.getElementById('theme');
    var themeToggler=document.getElementById('switch');
    if(click%2===0){
    appTheme.href="./css/App.css";
    themeToggler.textContent="Change Theme";
  }  else {
    themeToggler.textContent="Switch Back to Theme 1";
        appTheme.href="./css/index.css";
      }
}

const buttonClickColor = (value) => {
  var btnValue=document.getElementById(value);
 if (value === "+/-") {
    btnValue.classList.add("plusorminus-active");
} else if (value === "%") {
  btnValue.classList.add("modulus-active");
} else if (value === "/") {
 btnValue.classList.add("divide-active");
} else if (value === "7") {
 btnValue.classList.add("seven-active");
} else if (value === "8") {
 btnValue.classList.add("eight-active");
} else if (value === "9") {
  btnValue.classList.add("nine-active");
} else if (value === "*") {
 btnValue.classList.add("multiply-active");
} else if (value === "4") {
  btnValue.classList.add("four-active");
} else if (value === "5") {
  btnValue.classList.add("five-active");
} else if (value === "6") {
  btnValue.classList.add("six-active");
} else if (value === "-") {
btnValue.classList.add("minus-active");
} else if (value === "1") {
 btnValue.classList.add("one-active");
} else if (value === "2") {
 btnValue.classList.add("two-active");
} else if (value === "3") {
 btnValue.classList.add("three-active");
} else if (value === "+") {
  btnValue.classList.add("plus-active");
} else if (value === "0") {
  btnValue.classList.add("zero-active");
} else if (value === ".") {
 btnValue.classList.add("dot-active");
}  else  if (value === "AC" || value === "=") {
  var buttonArray = ['AC','+/-','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
 buttonArray.map(item=>{                  
  var btnItem=document.getElementById(item);
  btnItem.classList.remove("ac-active", "plusorminus-active", "modulus-active", "divide-active", "seven-active", "eight-active", "nine-active", "multiply-active", "four-active", "five-active", "six-active", "minus-active", "one-active", "two-active", "three-active", "plus-active", "zero-active", "dot-active", "equals-active");
 });
 }  
}

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'AC') {
      setDisplay('0');
    } else if (value === '+/-') {
      if (display > 0){
        setDisplay(-display)
      } else if (display < 0){
        setDisplay(-display)
      } else {
        setDisplay(display)
      }
    } else if (value === '%') {
        setDisplay(display/100)
    } else {
      setDisplay((prevDisplay) => {
        if (prevDisplay === '0' || prevDisplay === 'Error') {
          return value;
        } else {
          return prevDisplay + value;
        }
      });
    };
buttonClickColor(value);
  };

  return (
    <div className="container">
       <div className="col-6 row text-center">
    <button className="p-2 rounded-5 col-12 my-1 fourth-color" id='switch' onClick={handleChangeTheme}>
        Change theme
      </button>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 display-1 text-end p-2 pt-4 pb-2 first-color">{display}</div>
      </div>
      <div className="row">
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 second-color" id='AC' onClick={() => handleButtonClick('AC')}>AC</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 second-color" id='+/-' onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 second-color" id='%' onClick={() => handleButtonClick('%')}>%</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 fourth-color" id='/' onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="row">
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='7' onClick={() => handleButtonClick('7')}>7</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='8' onClick={() => handleButtonClick('8')}>8</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='9' onClick={() => handleButtonClick('9')}>9</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 fourth-color" id='*' onClick={() => handleButtonClick('*')}>x</button>
      </div>
      <div className="row">
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='4' onClick={() => handleButtonClick('4')}>4</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='5' onClick={() => handleButtonClick('5')}>5</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='6' onClick={() => handleButtonClick('6')}>6</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 fourth-color" id='-' onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className="row">
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='1' onClick={() => handleButtonClick('1')}>1</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='2' onClick={() => handleButtonClick('2')}>2</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='3' onClick={() => handleButtonClick('3')}>3</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 fourth-color" id='+' onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className="row">
        <button className="col-6 col-md-4 lead text-bold pt-2 pb-2 third-color" id='0' onClick={() => handleButtonClick('0')}>0</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 third-color" id='.' onClick={() => handleButtonClick('.')}>.</button>
        <button className="col-3 col-md-2 lead text-bold pt-2 pb-2 fourth-color" id='=' onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
