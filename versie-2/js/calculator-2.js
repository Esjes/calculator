buttons = document.getElementsByClassName('button');
var displayInput = document.getElementsByClassName('display-input')[0];
var displayOutput = document.getElementsByClassName('display-output')[0];
var reset = document.getElementsByClassName('button-reset')[0];
var equals = document.getElementsByClassName('button-result')[0];
var arrShow = [...buttons];

arrShow.forEach(function (element) {
    
    element.addEventListener("click", showInput);
    function showInput() {
        displayInput.innerHTML += element.innerHTML;  
    }

    reset.addEventListener('click', makeEmpty);
    function makeEmpty() {
        displayInput.innerHTML = null;
        displayOutput.innerHTML = null;
    
    }

    equals.addEventListener('click', calculate);
    function calculate(){
        displayOutput.innerHTML = eval(displayInput.innerHTML);
    }
});