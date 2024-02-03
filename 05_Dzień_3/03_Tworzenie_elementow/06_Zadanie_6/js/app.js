const lis = document.querySelectorAll('#list1 a, #list2 a');



const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');


for(const li of lis) {
    li.addEventListener("click", function(){
        if(this.parentElement === list1) {
            list2.appendChild(this);
        } else {
            list1.appendChild(this);
        }
    });
}