window.onload = loadArrayItems;

var items = ['read about javascript basics', 'read about javascript fucntions', 'read about javascript arrays', 'work on labs'];

function loadArrayItems() { 
    var element = document.getElementById('list');
    // reset button
    var reset = document.createElement("button");
    reset.innerHTML = 'reset';
    document.body.append(reset);
    reset.setAttribute('name', 'reset');
    reset.addEventListener('click', resetList);
    // delete button
    var deleteItem = document.createElement("button");
    deleteItem.innerHTML = 'delete';
    document.body.append(deleteItem);
    deleteItem.setAttribute('name', 'deleteItem');
    deleteItem.addEventListener('click', deleteItemFun);
    // input 
    var inputItem = document.createElement("input");
    document.body.append(inputItem);
    inputItem.setAttribute('id', 'inputItem');
    // add button
    var addItem = document.createElement("button");
    addItem.innerHTML = 'add';
    document.body.append(addItem);
    addItem.setAttribute('name', 'add');
    addItem.addEventListener('click', addItemFun);
    
    items.forEach(addItems);
    function addItems(item, index) {
        var listItem = document.createElement("li");
        element.appendChild(listItem);
        listItem.innerHTML = item;
        listItem.setAttribute('id', item);
        listItem.addEventListener('click', selected);
    } 
}

function selected() {
    //console.log(this.id);
    //console.log(event.target.id);
    var listItemId = this.id;
    document.getElementById(listItemId).style.fontWeight = "bold";
    document.getElementById(listItemId).style.background = "grey";
    document.getElementById(listItemId).setAttribute('class', 'selected');
    var element = document.getElementById('list');
    var listItem = element.getElementsByTagName('li');
    //console.log(listItem);
    for (var i=0;i<listItem.length;i++) {
        //console.log(listItem[i]);
        if(listItem[i].className == 'selected' && listItem[i].id != this.id){
            listItem[i].style.fontWeight = "normal";
            listItem[i].style.background = "white";
        }
    }
}

function resetList() {
    //console.log('in reset');
    var listItem = document.getElementsByTagName('li');
    //console.log(listItem);
    for (var i=0;i<listItem.length;i++) {
        //console.log(listItem[i]);
        listItem[i].style.fontWeight = "normal";
        listItem[i].style.background = "white";
    }
}

function deleteItemFun() {
    //console.log('in delete ');
    var listItem = document.getElementsByTagName('li'); 
    for (var i=0;i<listItem.length;i++) {
        if(listItem[i].className == 'selected') {
            //console.log("id is "+ listItem[i].id);
            //console.log(items.indexOf(listItem[i].id));
            items.splice(items.indexOf(listItem[i].id),1);
            //console.log(items);
            listItem[i].remove();
            break;
        }
    }
}

function addItemFun() {
    //console.log('in add');
    var inputItem = document.getElementById('inputItem').value;
    //console.log(inputItem);
    items.push(inputItem);
    //console.log(items);
    var element = document.getElementById('list');
    var listItem = document.createElement("li");
    element.appendChild(listItem);
    listItem.innerHTML = inputItem;
    listItem.setAttribute('id', inputItem);
    listItem.addEventListener('click', selected);
}

