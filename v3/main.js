class  Calculator {
    constructor(upperResult, lowerResult) {
        this.upperResult = upperResult
        this.lowerResult = lowerResult
        this.clear()
    }
    clear (){
        this.lower = ''
        this.upper = '' 
        this.operation = undefined
    }
    delete () {
        this.lower = this.lower.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.lower.includes('.')) return 
        this.lower = this.lower.toString() + number.toString()
    }
    chooseOperation(operation) {
        if (this.lower === '') return
        if (this.upper !== '') {
            this.compute()
        } 
        this.operation = operation
        this.upper = this.lower
        this.lower = ''
    }
    compute () {
        let computation 
        const up = parseFloat(this.upper)
        const low = parseFloat(this.lower)
        if (isNaN(up) || isNaN(low)) return
        switch (this.operation) {
            case '+':
                computation = up + low 
                break
            case '-':
                computation = up - low 
                break
            case '*':
                computation = up * low 
                break
            case '/':
                computation = up / low 
                break
            default:
                return
        }
        this.lower = computation
        this.operation = undefined 
        this.upper = '' 
    }
    getDisplayNumber (number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay 
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0  })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    updateDisplay () {
        this.lowerResult.innerText = this.getDisplayNumber(this.lower)
        if (this.operation != null) {
          this.upperResult.innerText = `${this.getDisplayNumber(this.upper)} ${this.operation}`
        } else {
            this.upperResult.innerText = ''   
        }
        
    }
    
}

 const numberButtons = document.querySelectorAll('[data-number]');
 const numberOperations = document.querySelectorAll('[data-operation');
 const equalsButton = document.querySelector('[data-equals]');
 const deleteButton = document.querySelector('[data-delete]');
 const allClearButton = document.querySelector('[data-all-clear]');
 const upperResult = document.querySelector('[data-upper]');
 const lowerResult = document.querySelector('[data-lower]');


const calculator = new Calculator (upperResult,lowerResult)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText) 
        calculator.updateDisplay()
    })
})

numberOperations.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText) 
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()

}) 
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()

}) 

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})