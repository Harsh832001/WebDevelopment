class Calculator{
    constructor (previousvalue,currentvalue){
        this.previousvalue = previousvalue;
        this.currentvalue = currentvalue;
        this.clear()
    }

    clear(){
        this.previousoperand = ''
        this.currentoperand = ''
        this.operation = undefined
        document.getElementsByClassName('output').value = ''
    }

    delete(){
        this.currentoperand = this.currentoperand.toString().slice(0, -1)
    }

    equal(){

    }

    appendNumber(number){

        if(number == '.' && this.currentoperand.includes('.')) return;
        this.currentoperand = this.currentoperand.toString() + number.toString();

    }

    updateDisplay(){
        this.currentvalue.innerText = this.currentoperand
        if(this.operation != null){
            this.previousvalue.innerText = 
                `${this.previousoperand} ${this.operation}`

        }
        

    }

    chooseOperation(operation){
        if(this.currentoperand == '')return
        if(this.previousoperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousoperand = this.currentoperand
        this.currentoperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousoperand)
        const current = parseFloat(this.currentoperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                 computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentoperand = computation
        this.previousoperand = ''
        this.operation = undefined


    }
}



const numberbutton = document.querySelectorAll('[data-number]')
const operationbutton = document.querySelectorAll('[data-operation]')
const allclearbutton = document.querySelector('[data-all-clear]')
const equalbutton = document.querySelector('[data-equal]')
const deletebutton = document.querySelector('[data-delete]')
const previousvalue = document.querySelector('[data-previous-value]')
const currentvalue = document.querySelector('[data-current-value]')

const calculator = new Calculator(previousvalue , currentvalue)

numberbutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        console.log(numberbutton)
    })
})


operationbutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
        console.log(numberbutton)
    })
})

equalbutton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allclearbutton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deletebutton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

