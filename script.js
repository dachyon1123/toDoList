const list = document.getElementById('list');
const listInput = document.getElementById('listInput');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
let amountOfItems = 0;


function createListItem() {
  var listItem = document.createElement('li');
  listItem.textContent= listInput.value
  list.appendChild(listItem);
  listInput.value = '';
  amountOfItems += 1;
}

function clearList() {
  list.innerHTML='';
}




btn1.addEventListener('click', createListItem);

btn2.addEventListener('click', clearList)
