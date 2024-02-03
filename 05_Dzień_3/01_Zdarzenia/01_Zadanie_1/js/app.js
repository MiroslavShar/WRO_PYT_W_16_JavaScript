const div = document.getElementById('contener');
console.log(div);
div.addEventListener('click', function (event){
    console.log(event.target);
    console.log(event.currentTarget);
})


const button2 = document.getElementById('counter');
button2.addEventListener('click',
    function (event){
    console.log(event);
    console.log('Kliknięto w przycisk');
    })

const button = document.querySelector("button");
let clickCount = 0;
function clickCounter(event) {
  clickCount += 1;
  console.log('Click number', clickCount);
  if (clickCount == 10) {
      button.removeEventListener('click', clickCounter);
      button.addEventListener('click', randomWord);
  }
}
function randomWord(event) {
    const randomWords = ['Some', 'Random', 'Words'];
    const myWord = randomWords[Math.floor(Math.random() * randomWords.length)];

  console.log(myWord);
}

button.addEventListener('mouseover', function (event){
    console.log('najechales myszką');
})

button.addEventListener('click', clickCounter);
button.addEventListener('click', randomWord);

const buttons = document.querySelectorAll('[id*=btn]');
console.log(buttons)
buttons.forEach(function (button){
    button.addEventListener('click', function (){
        this.style.backgroundColor='red'
    })
}

