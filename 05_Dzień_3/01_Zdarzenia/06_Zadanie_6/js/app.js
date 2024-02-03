// Uruchom stronę przygotowaną dla zadania.
// Na stronie znajdują się trzy elementy div.
// Napisz jeden wspólny event dla nich wszystkich,
// który będzie zmieniał kolor tła tylko w klikniętym divie. U
// żyj do tego słowa kluczowego this.
//
// Hint: Żeby uzyskać losowy kolor użyj poniższego kodu:

document.addEventListener('DOMContentLoaded', function (){
    const divs = document.querySelectorAll('.div');
    divs.forEach(function (div){
        div.addEventListener('mouseover', function (){
            this.querySelector(.)
        })
    })
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);


})