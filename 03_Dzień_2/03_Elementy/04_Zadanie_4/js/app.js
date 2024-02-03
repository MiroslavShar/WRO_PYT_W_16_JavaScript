// Znajdź na stronie element o class superFooter
// Stwórz funkcję getId(element), d
// o której przekaż jako argument znaleziony element
// pobierz w funkcji nazwę id elementu i zwróć ją


let superF = document.querySelector('.superFooter');
console.log(superF);

function getId(element){
    let sf = element;
    console.log(sf.id)
}

getId(superF)
