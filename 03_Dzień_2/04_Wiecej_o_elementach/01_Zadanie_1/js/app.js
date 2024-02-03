// Zadanie 1 - rozwiązywane z wykładowcą

// Zmodyfikuj listę w sekcji .exercise w następujący sposób:

//     Nastaw kolor tła co drugiego elementu listy na szary (#9e9e9e),
//     Nastaw piątemu elementowi listy klasę big,
//     Nastaw co trzeciemu elementowi podkreślenie.

let lis = document.querySelectorAll("section.exercise ul li");
let everySecondElement = document.querySelectorAll("section.exercise ul li:nth-child(2n)");
let fifthElement = document.querySelector("section.exercise ul li:nth-child(5)");
let everyThirdElement = document.querySelectorAll("section.exercise ul li:nth-child(3n)");

for(let i=0; i < everySecondElement.length; i++) {
    everySecondElement[i].style.backgroundColor = "#9e9e9e";
}

fifthElement.classList.add("big");

Array.from(everyThirdElement).forEach(function(element){
    element.style.textDecoration = "underline";
});

/*
for(let i=0; i < lis.length; i++) {
    //0,+1,2,+3,4,+5,6 - kolor szary
    if( i % 2 != 0) {
        lis[i].style.backgroundColor = "#9e9e9e";
    }
    if (i === 4) {
        lis[i].classList.add("big");
    }
    //0, 1, +2, 3, 4, +5, 6
    if ( i % 3 == 1) {
        lis[i].style.textDecoration = "underline";
    }
}
*/







