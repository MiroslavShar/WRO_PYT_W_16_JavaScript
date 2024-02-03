function Calculator() {
    this.table = []
}

Calculator.prototype.add = function (a, b){
    let wynik = a + b
    this.table.push('Added to ' + this.a + 'to' + this.b +'got result ' + wynik)
    console(this.table)
}

Calculator.prototype.multiply = function (a, b){
    let wynik = a * b
    this.table.push('Multiplied to ' + this.a + 'to' + this.b +'got result ' + wynik)
    console(this.table)
}

Calculator.prototype.subtract = function (a, b){
    let wynik = a - b
    this.table.push('Multiplied to ' + this.a + 'to' + this.b +'got result ' + wynik)
    console(this.table)
}

Calculator.prototype.devide = function (a, b){
    let wynik = a / b
    this.table.push('Multiplied to ' + this.a + 'to' + this.b +'got result ' + wynik)
    console(this.table)
}

Calculator.prototype.printOperations = function (b){
    this.table.forEach(function (element){
        console.log(element)
    })
}