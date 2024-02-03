// Stwórz funkcję getTags(elements),
// do której przekaż jako argument
// zmienną childElements (pamiętaj o tym,
// że jest to pseudotablica)
// stwórz w funkcji nową tablicę
// i wypełnij ją nazwami tagów pobranymi z elementów
// znajdujących się w childElements
// zwróć tą tablicę.

const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");

function getTags(elements){
    let childE = [];
    childE = elements;
    let newTable = [];
    console.log(childE);
    for(let i = 0; i<childE.length; i++){
        console.log(childE[i].tagName);
        newTable.push(childE[i].tagName)

    }
    console.log(newTable);
}

getTags(childElements)
