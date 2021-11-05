var itemList = document.getElementById('items');
var form = document.getElementById('addForm');
var filter= document.getElementById('item');

//sumbit event
form.addEventListener('submit',addItem);

//filter event
filter.addEventListener('keyup',filterItems);

//add item function
function addItem(e){
 e.preventDefault();

 //get input value
 var newItem = document.getElementById('item').value;

 //create new list element
 var li = document.createElement('li');
 li.className='list-group-item';
 li.appendChild(document.createTextNode(newItem));
 itemList.appendChild(li);
}

//filterItems function
function filterItems(e){
    var text=e.target.value;
   /* var items= document.querySelectorAll('.list-group-item');
    if(items.indexOf(text)!= -1){
        items.style.display='block';
    }
        else{
            items.style.display='none';
        }*/
   var items= itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.indexOf(text) != -1){
            item.style.display='block';
        }
            else{
                item.style.display='none';
            }
    })
}