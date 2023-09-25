const list = document.getElementById('list');
const listInput = document.getElementById('listInput');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
let amountOfItems = 0;


function createListItem() {
  var listItem = document.createElement('li');
  var deleteButtonDiv = document.createElement('div');
  var deleteButton = document.createElement('button');

  deleteButtonDiv.setAttribute("id", "deleteButtonDiv" + amountOfItems);
  deleteButtonDiv.style.display = "flex";
  deleteButtonDiv.style.justifyContent = "space-between";
  deleteButtonDiv.style.gap = "10px";


  deleteButton.setAttribute("id", "deleteButton" + amountOfItems);
  deleteButton.textContent="X"

  deleteButton.addEventListener('click', function() {
    deleteButton.parentElement.remove();
  })

  listItem.textContent= listInput.value
  list.appendChild(deleteButtonDiv);
  deleteButtonDiv.appendChild(listItem);
  deleteButtonDiv.appendChild(deleteButton)
  listInput.value = '';
  amountOfItems += 1;
}

function clearList() {
  list.innerHTML='';
}





btn1.addEventListener('click', createListItem);

btn2.addEventListener('click', clearList)

