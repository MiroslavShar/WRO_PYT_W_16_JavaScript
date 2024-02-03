const buttons = document.querySelectorAll('[id*=button]');

buttons.forEach(function (button){
    button.addEventListener('click', function (event){
        event.preventDefault();
        if(this.previousElementSibling){
            this.previousElementSibling.classList.toggle('hidden')
        }
    })
})

