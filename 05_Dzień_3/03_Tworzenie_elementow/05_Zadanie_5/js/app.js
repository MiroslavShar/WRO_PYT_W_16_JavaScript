const list = document.getElementById('list');
console.log("🚀 ~ list:", list);

const remove = document.getElementById('remove');
console.log("🚀 ~ remove:", remove);

remove.addEventListener("click", function(){
    // while(list.lastElementChild) {
    //     list.removeChild(list.lastElementChild);
    // }
   list.innerHTML = "";
});