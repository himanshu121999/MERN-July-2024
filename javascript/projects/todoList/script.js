

let addBtn = document.getElementById("add-btn");

let taskInput = document.getElementById("task");

let list = document.getElementById("list");

addBtn.addEventListener('click' , ()=> {
 let inputValue = taskInput.value;

 let listItem = document.createElement('div');

 listItem.innerHTML = `
 <input type="checkbox">
<div> ${inputValue} </div>
<button class="delete-btn" > Delete </button>
 `

 list.appendChild(listItem);

 taskInput.value = ""
 taskInput.focus()
 
 
})


let deleteButtons = document.getElementsByClassName("delete-btn");

Array(...deleteButtons).forEach((btn)=> {
  btn.addEventListener('click' , (event)=> {
    list.removeChild(event.target.parentElement)
  })
})