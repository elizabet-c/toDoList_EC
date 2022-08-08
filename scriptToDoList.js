// Add item to list
function addItem() {
    let listNode = document.getElementById('list'),
        liNode = document.createElement('li'),
        txt = document.getElementById('listInput');
    liNode.setAttribute('id', txt.value);
    liNode.setAttribute('class', 'item'); 
    liNode.innerHTML = txt.value;
    listNode.appendChild(liNode);
    txt.value='';

};

let list = document.querySelector("#list");


list.addEventListener('click', function removeItem(event) {
    function itemDeletion() {
        document.getElementById(event.target.id).remove(); 
    }
    document.getElementById(event.target.id).setAttribute('class', 'strike');
    setTimeout(itemDeletion, 1000);
});



