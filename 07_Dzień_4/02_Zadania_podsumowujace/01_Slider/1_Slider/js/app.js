const next = document.getElementById('nextPicture');
const prev = document.getElementById('prevPicture');
const elementsList = document.querySelectorAll('ul li');
let indexImg = 0;

elementsList[0].classList.add('visible');

next.addEventListener('click', function (){
    console.log('Kliknięcie w next');
    elementsList[indexImg].classList.remove('visible');
    indexImg++;
    if (indexImg > elementsList.length - 1){
        indexImg = 0
}
        elementsList[indexImg].classList.add('visible')



})

prev.addEventListener('click', function (){

    console.log('Kliknięcie w prev');
    elementsList[indexImg].classList.remove('visible');
    indexImg--;
    if (indexImg<0){
        indexImg = elementsList.length - 1;
    }
    elementsList[indexImg].classList.add('visible')
})


