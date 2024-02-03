const deleteButtons = document.querySelectorAll('a.deleteBtn');

for(const button of deleteButtons){
    button.addEventListener("click", function(event){
        event.preventDefault();

        const toDelete = this.parentElement.parentElement;
        toDelete.parentElement.removeChild(toDelete);
    });
}