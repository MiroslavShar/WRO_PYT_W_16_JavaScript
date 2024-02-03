// Stwórz obiekt stairs.
//
// Niech obiekt posiada pole step, które na początku ustaw na 0.
//
// Dodaj do obiektu również następujące metody:
//
// up(), która zwiększa schodek o 1 (modyfikuj pole step)
// down(), która zmniejsza schodek o 1 (modyfikuj pole step)
// printStep(), która pokazuje, na którym schodku jesteśmy.
// Przykład wywołania:

const stairs = {
    step: 0,
    up: function (step){
        console.log(this.step += 1)
    },
    down: function (step){
        console.log(this.step -= 1)
    },
    printStep: function (step){
        console.log(this.step)
    }
}

// console.log(stairs.up());
// console.log(stairs.up());
// console.log(stairs.up());
// console.log(stairs.down());
// console.log(stairs.printStep()); // 2

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep() // 2

