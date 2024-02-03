// Uruchom stronę przygotowaną dla zadania.
// Na stronie znajdują się trzy przyciski i jeden licznik.
// Napisz jeden wspólny event dla wszystkich przycisków,
// który spowoduje, że po kliknięciu w przycisk licznik
// zwiększy wartość o jeden.


document.addEventListener('DOMContentLoaded', function (){
    const buttons = document.querySelectorAll('[class*=btn]');
    let clickCount = 0;
    buttons.forEach(function (button){
        button.addEventListener('click', function (event){
        clickCount += 1;
        console.log('liczba kliknięć ', clickCount);
        console.log(event.target);
        console.log(event.currentTarget);
    })
        })
})