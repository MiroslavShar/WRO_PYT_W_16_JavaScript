// Na stronie przypisanej do zadania znajduje
// się lista i przycisk. Dopisz odpowiednie eventy do nich w
// taki sposób, żeby po kliknięciu w przycisk dodał się
// nowy element do listy. Element powinien mieć w
// sobie informacje na temat tego,
// ile elementów jest w liście w chwili jego dodania.


const addButtons = document.querySelector('#add');
console.log(addButtons);

const menu = document.getElementById('menu');


addButtons.addEventListener('click', function (event){
const newLi = document.createElement('li');
newLi.innerText = 'Element 1 - w chwili dodania było 0 elementów';
menu.appendChild(newLi);
newLi.classList.add('list-group-item');

})



// for(const button of addButtons){
//     button.addEventListener("click", function(event){
//         event.preventDefault();
//
//         const toAdd = document.querySelector('div.card-body');
//         toAdd.appendChild(toAdd);
//     });
