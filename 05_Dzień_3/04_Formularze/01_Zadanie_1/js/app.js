const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');


class Form{
    constructor(){
        this.form = document.querySelector('main.container form');
        console.log("🚀 ~ Form ~ constructor ~ form:", this.form);

        this.email = document.getElementById('email');
        this.name = document.getElementById('name');
        this.surname = document.getElementById('surname');
        this.pass1 = document.getElementById('pass1');
        this.pass2 = document.getElementById('pass2');
        this.checkbox = document.getElementById('agree');
    }
    getData(){
        return {
            email: this.email.value,
            name: this.name.value,
            surname: this.surname.value,
            pass1: this.pass1.value,
            pass2: this.pass2.value,
            checkbox: this.checkbox.checked
        }
    }
    isEmailValid(){
        return this.getData().email.includes('@');
    }
    isNameValid(){
        return this.getData().name.length > 2;
    }
    isSurnameValid(){
        return this.getData().surname.length > 2;
    }
    isPasswordValid(){
        const { pass1, pass2 } = form.getData(); //destruktyryzacja - ES6
        return pass1.length > 0 && pass1 === pass2;
    }
    isCheckboxChecked(){
        return this.checkbox.checked;
    }
    validate(){
        errorMessage.innerText = "";
        errorMessage.classList.add("d-none");
        successMessage.classList.add('d-none');

        if(!this.isEmailValid()) {
            errorMessage.innerText = 'Email musi posiadać znak @';
        }

        if(!this.isNameValid()) {
            errorMessage.innerText = 'Twoje imię jest za krótkie';
        }

        if(!this.isSurnameValid()) {
            errorMessage.innerText = 'Twoje nazwisko jest za krótkie';
        }

        if(!this.isPasswordValid()) {
            errorMessage.innerText = 'Hasła nie są takie same lub puste';
        }
        if(!this.isCheckboxChecked()) {
            errorMessage.innerText = 'Musisz zaakceptować warunki';
        }

        if(errorMessage.innerText !== ""){
            errorMessage.classList.remove('d-none');
        } else {
            successMessage.classList.remove('d-none');
            successMessage.innerText = 'Formularz wysłany!';
        }

    }
}

const form = new Form();
form.form.addEventListener("submit", function(event){
    event.preventDefault();
    form.validate();
});