// Przeanalizuj kod HTML i JavaScript. W pliku js/app.js jest przygotowane kilka zmiennych,
// w których zapisane są wyszukane elementy DOM.
//
// Wypisz w konsoli wszystkie te zmienne. Sprawdź, które z nich to pseudotablice.
//
// W przypadku pseudotablic przeiteruj (używając np. pętli for).
// Wypisz nazwę tagu oraz klasy dla każdego elementu.


const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");
console.log(home);
console.log(children);
console.log(ban);
console.log(someBlocks);
console.log(listElements);

function convertTable(elements){
    for(let i=0; i<elements.length; i++){
        console.log(elements[i].tagName, elements[i].className);
    }
}

convertTable(home);
convertTable(children);
convertTable(ban);
convertTable(someBlocks);
convertTable(listElements);