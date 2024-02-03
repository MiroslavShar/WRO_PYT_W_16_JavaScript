// Stwórz funkcję getClassInfo(element),
// do której przekaż jako argument zmienną banner
// zwróć tablicę z listą klas, pobraną z
// przekazanego do funkcji argumentu.


const banner = document.querySelector(".ban");
console.log(banner);


function getClassInfo(element) {
    let classTable = [];
    return Array.from(element.classList);

}

console.log(getClassInfo(banner));