// Wypisz w konsoli wartość innerText dla
// elementów zmiennej blocks. Następnie ustaw wartość
// innerText na "Nowa wartość diva o klasie blocks".


const blocks = document.querySelectorAll(".block");
console.log(blocks);

function getInnerHtml(elements){
    for(let i=0; i<elements.length; i++){
        console.log(elements[i].innerText);
        elements[i].innerText = 'Nowa wartość diva o klasie blocks'

    }
}


getInnerHtml(blocks)
