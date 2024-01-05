import {validate , saveDataLoxalStorage , getDataFromStorage , createTodo} from "./functions.js"
const todoHeader = document.getElementById('todo-header');
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const error = document.querySelector('#error');
const todoList = document.querySelector('#todo-list');

 button && button.addEventListener('click' , function() {
    if(validate(input,error)){
        const todo = {
            id : Date.now(),
            text: input.value,
            status: "active"
        };
        input.value = '';
        let todoItem = createTodo(todo)
        todoList.innerHTML += todoItem
        saveDataLoxalStorage(todo);


    } else{
        console.log("validatsiyadan otmadi")
    }
})

input && input.addEventListener('keyup' , function(event){
if(event.keyCode == 13){
    if(validate(input,error)){
        const todo = {
            id : Date.now(),
            text: input.value,
            status: "active"
        };
        input.value = '';
        let todoItem = createTodo(todo)
        todoList.innerHTML += todoItem
        saveDataLoxalStorage(todo);


    } else{
        console.log("validatsiyadan otmadi")
    }
}
})

document.addEventListener('DOMContentLoaded' , function(){
let data = getDataFromStorage();
if(data.length){
    data.forEach(item => {
        let todo = createTodo(item);
        todoList.innerHTML += todo
    });
}
const checkboxes = document.querySelectorAll(`input[type='checkbox']`)
if(checkboxes.length){
    checkboxes.forEach(item =>{
        item.addEventListener('change' , function(event){
            if(event.target.checked){
                this.nextSibling.nextSibling.style.textDecoration = "line-through"

            } else{
                this.nextSibling.nextSibling.style.textDecoration = "none"
            }
            console.log(this.nextSibling.nextSibling.innerHTML)
        })
    })
}
})




