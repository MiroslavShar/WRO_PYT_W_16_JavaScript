class Form {
    constructor(){
        this.orderId = document.getElementById('orderId');
        this.item = document.getElementById('item');
        this.quantity = document.getElementById('quantity')
        this.button = document.getElementById('add');
    }
    getData() {
        return {
            orderId: this.orderId.value,
            item: this.item.value,
            quantity: this.quantity.value,
        }
    }
}

function addElement(parent, data) {
    const newTr = document.createElement('tr');
    const newTdOrderId = document.createElement('td');
    const newTdItem = document.createElement('td');
    const newTdQuantity = document.createElement('td');

    newTdOrderId.innerText = data.orderId;
    newTdItem.innerText = data.item;
    newTdQuantity.innerText = data.quantity;

    newTr.appendChild(newTdOrderId);
    newTr.appendChild(newTdItem);
    newTr.appendChild(newTdQuantity);

    parent.appendChild(newTr);

}

const form = new Form();
const tbody = document.querySelector("#orders tbody");


form.button.addEventListener("click", function(){
   addElement(tbody, form.getData());
});