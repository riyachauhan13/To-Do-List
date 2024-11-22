let input = document.querySelector("input");
let todoContainer = document.querySelector(".todo-container");
let button = document.querySelector("button");
let alertContainer = document.querySelector(".alertContainer")
let crossIcon = document.querySelector(".fa-xmark")


let newTodo;
let editTodo = null;

function removeAlert(){
  alertContainer.style.cssText="top: 23px; right: -270px;"
}


function createTodo() {
  if (button.innerText === "Edit Todo") {
    editTodo.target.parentElement.previousElementSibling.innerText =
      input.value;
      input.value =""
    button.innerText = "Add Todo";
    input.focus()
  } else {
    if (input.value == "") {

      alertContainer.style.cssText ="top: 23px; right:270px;"
      
    }else{
      newTodo = document.createElement("div");
      newTodo.classList.add("newTodo");

      todoContainer.appendChild(newTodo);

      let p = document.createElement("p");
      p.innerText = input.value;
      input.value = "";

      editIcon = document.createElement("i");
      editIcon.classList.add("fa-regular");
      editIcon.classList.add("fa-pen-to-square");

      let removeIcon = document.createElement("i");
      removeIcon.classList.add("fa-regular");
      removeIcon.classList.add("fa-trash-can");

      let iconContainer = document.createElement("div");
      iconContainer.classList.add("icons");
      iconContainer.append(editIcon, removeIcon);

      newTodo.append(p, iconContainer);

      removeIcon.onclick = () => {
        iconContainer.parentNode.remove();
      };

      editIcon.onclick = (e) => {
        input.value = p.innerText;
        input.focus();
        p.innerText = "";
        button.innerText = "Edit Todo";
        editTodo = e;
      };
    }
  }
}
