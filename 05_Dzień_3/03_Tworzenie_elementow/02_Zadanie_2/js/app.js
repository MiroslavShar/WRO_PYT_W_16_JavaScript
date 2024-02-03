// Na stronie znajduje się przycisk.
// Musisz dopisać do niego event w taki sposób,
// żeby po kliknięciu w niego został usunięty ze strony.


const deleteButtons = document.querySelectorAll('[id*=remove]');

for(const button of deleteButtons){
    button.addEventListener("click", function(event){
        event.preventDefault();

        const toDelete = this.parentElement;
        toDelete.parentElement.removeChild(toDelete);
    });
}