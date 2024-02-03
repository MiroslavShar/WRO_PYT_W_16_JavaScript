// Uruchom stronę przygotowaną dla zadania.
// Na stronie znajdują się trzy przyciski i
// trzy liczniki (elementy span o klasie counter).
// Do każdego przycisku dopisz event,
// który spowoduje, że po kliknięciu
// w przycisk przypisany do niego licznik
// zwiększy swoją wartość o jeden.

document.addEventListener('DOMContentLoaded', function (){
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    console.log(button1, button2, button3);
    let clickCount1 = 0;
    let clickCount2 = 0;
    let clickCount3 = 0;
    const counters = document.querySelectorAll('span.counter');



    button1.addEventListener('click', function (event){
        clickCount1 += 1;
        console.log(clickCount1)
        counters[0].innerText=clickCount1;

    })

    button2.addEventListener('click', function (event){
        clickCount2 += 1;
        console.log(clickCount2);
        counters[1].innerText=clickCount2;
    })

    button3.addEventListener('click', function (event){
        clickCount3 += 1;
        console.log(clickCount3);
        counters[2].innerText=clickCount3;
    })

})