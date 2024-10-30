const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
console.log(screenDisplay)



let calculation = [] //each time you get value push into array



function calculate(button){
    console.log('click', button.textContent)
    const value = button.textContent

    if(value === "CLEAR"){
        calculation = [] 
        screenDisplay.textContent ='.'
    }
    else if(value == "="){
        screenDisplay.textContent = eval(accumaltiveCalculation) //calculates whats in screen
    }else{

    
    calculation.push(value)
    accumaltiveCalculation = calculation.join('')
    screenDisplay.textContent = accumaltiveCalculation
    }
    
}

buttons.forEach(button => button.addEventListener('click',() => calculate(button)))

