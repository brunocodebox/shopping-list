var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listli = document.getElementsByTagName("li");

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


for (var i=0; i < listli.length; i++) {
        listli[i].addEventListener('click', addDoneKeypress);
        addItemWithButton(listli[i]);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addItemWithButton(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDoneKeypress(event) {
	this.classList.toggle("done");
}

function deleteListItem(event) {
	this.parentNode.parentNode.removeChild(this.parentNode);
}

function addItemWithButton(item) {
	var but = document.createElement("button");
 	item.appendChild(but);
 	but.appendChild(document.createTextNode("delete"));
 	but.addEventListener("click", deleteListItem);
}


