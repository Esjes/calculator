var buttonNul = document.getElementsByClassName('zero')[0];
var buttonTwo = document.getElementsByClassName('two')[0];
var displayInput = document.getElementsByClassName('display-input')[0];

    //console.log(secondNumber);

var displayInputResult = document.getElementsByClassName('display-input')[0].innerHTML;
var displayOutput = document.getElementsByClassName('display-output')[0];
var buttonPlus = document.getElementsByClassName('plus')[0];
var buttonEquals = document.getElementsByClassName('equals')[0];

buttonNul.addEventListener('click', showInputNul);
buttonTwo.addEventListener('click', showInputTwo);
buttonPlus.addEventListener('click', showInputPlus);
buttonEquals.addEventListener('click', showInputEquals);

//console.log(buttonNul);

function showInputNul(){
    displayInput.innerHTML += '0';

}

function showInputTwo(){
    displayInput.innerHTML += '2';

}




function showInputPlus(){
    console.log('test :' + displayInput.innerHTML);
    displayInput.innerHTML += '+';
    var firstNumber = parseInt(displayInput.innerHTML);
    var str = displayInput.innerHTML, 
    arr = str.split('+'),
    firstNumber = arr[0],
    secondNumber = arr[1];
    console.log('eerste antwoord:' +firstNumber);
}

function showInputEquals(){
    var str = displayInput.innerHTML, 
    arr = str.split('+'),
    firstNumber = arr[0],
    secondNumber = arr[1];
    console.log('tweede antwoord:' +secondNumber);
}

