// TODO: Finish this method to make it add 2 numbers
function add(num1, num2){
    return num1 + num2;
}

// TODO: Finish this method to make it subtract 2 numbers
function subtract(num1, num2){
    return num1 - num2;
}

// TODO: Finish this method to make it multiply 2 numbers
function multiply(num1, num2){
    return num1 * num2;
}

// TODO: Finish this method to make it divide 2 numbers
function divide(num1, num2){
    if(num2 === 0){
        return 0;
    }else{
        return num1 / num2;
    }
}

// TODO: Make a way for the js to change html
function editTextBox(){
    const button = document.querySelector( 'p.text.box')
    box.textContent = addition(num1, num2)
    return null;
}

// TODO: BONUS - Make a function that allows you to have any equation with any amount of numbers
function mathGod(){
    return null;
}

module.exports =  {
    add,
    subtract,
    multiply,
    divide,
    mathGod
}