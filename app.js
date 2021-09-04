let heldValue = null

let heldOperation = null

let nextValue = null

$('.digits button').click(function(){
    if (nextValue === null){
        nextValue = '0'
    } 

    nextValue += $(this).text()

    updateDisplay()
})

$('.add').click(function (){
    setHeldOp(add)

    $('.next-operation').text('+')
    updateDisplay()
})

$('.subtract').click(function(){
    setHeldOp(subtract)

    $('.next-operation').text('-')
    updateDisplay()
})

$('.multiply').click(function(){
    setHeldOp(multiply)

    $('.next-operation').text('X')
    updateDisplay()
})

$('.divide').click(function(){
    setHeldOp(divide)

    $('.next-operation').text('/')
    updateDisplay()
})

$('.equals').click(function (){
    setHeldOp(null)
    
    $('.next-operation').text('')

    updateDisplay()
})

$('.clear-all').click(function (){
    heldValue = null;
    nextValue = null;
    heldOperation = null;

    $('.next-operation').text('')

    updateDisplay()
})

$('.clear-entry').click(function (){
    nextValue = null

    updateDisplay()
})

function updateDisplay(){
    showValue('.held-value', heldValue)
    showValue('.next-value', nextValue)
}

function showValue(location, value){
    if (value === null){
        $(location).text('')
    } else {
        $(location).text(Number(value))
    }
}



function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function setHeldOp(operation){
    if(heldOperation !== null){
        heldValue = heldOperation(Number(heldValue), Number(nextValue))
    } else if (nextValue !== null && heldOperation === null){
        heldValue = nextValue
    }

    nextValue = null

    heldOperation = operation
}

updateDisplay()