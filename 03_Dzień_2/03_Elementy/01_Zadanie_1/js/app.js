// Stwórz funkcję getDataInfo(elements),
// do której przekaż jako argument zmienną links
// (pamiętaj o tym, że jest to pseudotablica)
// stwórz w funkcji nową tablicę i wypełnij
// ją wartościami pobranymi z atrybutu data każdego
// elementu li
// zwróć tą tablicę.

const links = document.querySelector(".links").querySelectorAll("li");

console.log(links);

function getDataInfo(elements){
    let result = [];
    for(let i=0; i<elements.length; i++){
        result.push(elements[i].dataset.color);
    }
    return result;
}

let array = getDataInfo(links);
console.log(array);