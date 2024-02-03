/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

const elements = document.querySelectorAll('ul li img');
const elementBody = document.querySelector('body');

elements.forEach(function (element){
    element.addEventListener('click', function (){
        console.log('działa')
        console.log(this.getAttribute('src'));
        const newBody = document.createElement('div');
        newBody.classList.add('fullScreen');
        newBody.innerHTML = `<img src="${this.getAttribute('src')}"><button class="close">Close</button>`;
        elementBody.appendChild(newBody);

        let buttonClose = document.querySelector('button.close');
        console.log(buttonClose);
        buttonClose.addEventListener('click', function (){
        newBody.remove();
})

    })
    }
)






