var buttonNul = document.getElementsByClassName('zero')[0];
var buttonOne = document.getElementsByClassName('one')[0];
var buttonTwo = document.getElementsByClassName('two')[0];
var buttonThree = document.getElementsByClassName('three')[0];
var buttonFour = document.getElementsByClassName('four')[0];
var buttonFive = document.getElementsByClassName('five')[0];
var buttonSix = document.getElementsByClassName('six')[0];
var buttonSeven = document.getElementsByClassName('seven')[0];
var buttonEight = document.getElementsByClassName('eight')[0];
var buttonNine = document.getElementsByClassName('nine')[0];
var displayInput = document.getElementsByClassName('display-input')[0];
var displayInputResult = document.getElementsByClassName('display-input')[0].innerHTML;
var displayOutput = document.getElementsByClassName('display-output')[0];
var buttonPlus = document.getElementsByClassName('plus')[0];
var buttonMinus = document.getElementsByClassName('minus')[0];
var buttonDivided = document.getElementsByClassName('divided')[0];
var buttonMultiply = document.getElementsByClassName('multiply')[0];
var buttonReset = document.getElementsByClassName('reset')[0];
var buttonEquals = document.getElementsByClassName('equals')[0];
var workWith = 0;

buttonNul.addEventListener('click', showInputNul);
buttonOne.addEventListener('click', showInputOne);
buttonTwo.addEventListener('click', showInputTwo);
buttonThree.addEventListener('click', showInputThree);
buttonFour.addEventListener('click', showInputFour);
buttonFive.addEventListener('click', showInputFive);
buttonSix.addEventListener('click', showInputSix);
buttonSeven.addEventListener('click', showInputSeven);
buttonEight.addEventListener('click', showInputEight);
buttonNine.addEventListener('click', showInputNine);

buttonPlus.addEventListener('click', showInputPlus);
buttonMinus.addEventListener('click', showInputMinus);
buttonDivided.addEventListener('click', showInputDivided);
buttonMultiply.addEventListener('click', showInputMultiply);
//buttonReset.addEventListener('click', showInputReset);
buttonEquals.addEventListener('click', showInputEquals);


//console.log(buttonNul);

function showInputNul() {
    displayInput.innerHTML += '0';
}
function showInputOne() {
    displayInput.innerHTML += '1';
}
function showInputTwo() {
    displayInput.innerHTML += '2';
}

function showInputThree() {
    displayInput.innerHTML += '3';
}

function showInputFour() {
    displayInput.innerHTML += '4';
}

function showInputFive() {
    displayInput.innerHTML += '5';
}

function showInputSix() {
    displayInput.innerHTML += '6';
}

function showInputSeven() {
    displayInput.innerHTML += '7';
}

function showInputEight() {
    displayInput.innerHTML += '8';
}

function showInputNine() {
    displayInput.innerHTML += '9';
}

function showInputPlus() {
    //console.log('test :' + displayInput.innerHTML);
    displayInput.innerHTML += '+';
    var firstNumber = parseInt(displayInput.innerHTML);
    var str = displayInput.innerHTML,
        arr = str.split('+'),
        firstNumber = arr[0];

    workWith = 1;
    //console.log('eerste antwoord:' + firstNumber);
}
function showInputMinus() {
    displayInput.innerHTML += '-';
    var firstNumber = parseInt(displayInput.innerHTML);
    var str = displayInput.innerHTML,
        arr = str.split('-'),
        firstNumber = arr[0];

    workWith = 2;
}

function showInputMultiply() {
    //console.log('test :' + displayInput.innerHTML);
    displayInput.innerHTML += '*';
    var firstNumber = parseInt(displayInput.innerHTML);
    var str = displayInput.innerHTML,
        arr = str.split('*'),
        firstNumber = arr[0];

    workWith = 3;
    //console.log('eerste antwoord:' + firstNumber);
}

function showInputDivided() {
    //console.log('test :' + displayInput.innerHTML);
    displayInput.innerHTML += '/';
    var firstNumber = parseInt(displayInput.innerHTML);
    var str = displayInput.innerHTML,
        arr = str.split('/'),
        firstNumber = arr[0];

    workWith = 4;
    //console.log('eerste antwoord:' + firstNumber);
}

function showInputEquals() {
    console.log(workWith);
    switch (workWith){
        case 1:
        var firstNumber = parseInt(displayInput.innerHTML);
        var str = displayInput.innerHTML,
            arr = str.split('+'),
            firstNumber = arr[0],
            secondNumber = arr[1];
        var result = parseInt(firstNumber) + parseInt(secondNumber);
        displayOutput.innerHTML = result;
            break;
        case 2:
        var firstNumber = parseInt(displayInput.innerHTML);
        var str = displayInput.innerHTML,
            arr = str.split('-'),
            firstNumber = arr[0],
            secondNumber = arr[1];
        var result = parseInt(firstNumber) - parseInt(secondNumber);
        displayOutput.innerHTML = result;
            break;
        case 3:
        var firstNumber = parseInt(displayInput.innerHTML);
        var str = displayInput.innerHTML,
            arr = str.split('*'),
            firstNumber = arr[0],
            secondNumber = arr[1];
        var result = parseInt(firstNumber) * parseInt(secondNumber);
        displayOutput.innerHTML = result;
        break;
        case 4:
        var firstNumber = parseInt(displayInput.innerHTML);
        var str = displayInput.innerHTML,
            arr = str.split('/'),
            firstNumber = arr[0],
            secondNumber = arr[1];
        var result = parseInt(firstNumber) / parseInt(secondNumber);
        displayOutput.innerHTML = result;
        break;
    }
}
    //console.log('tweede antwoord:' +secondNumber);


