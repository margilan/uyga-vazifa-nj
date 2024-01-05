function validate(form,error){
    if(!form.value){
        error.style.display = "block"
        error.style.color = "red"
        return false
    } else{
        error.style.display = "none"
    }

    if(!form.value.trim()){
        error.style.display = "block"
        error.style.color = "red"
        error.innerHTML = `Probellardan tashkil topgan matn bo'lmasligi kerak !!!`
        return false

    } else{
        error.style.display = "none"
        error.innerHTML = `Matn kiritilishi shart !!!`

    }

    if(form.value.length <= 5){
        error.style.display = "block"
        error.style.color = "red"
        error.innerHTML = `Belgilar soni 5 tadan ko'p bo'lishi kerak !!!`
    } else{
        error.style.display = "none"
        error.innerHTML = `Matn kiritilishi shart !!!`
    } 




    return true
}

function saveDataLoxalStorage(todo){
    let data = [];
    if(localStorage.getItem('todos')){
        data = JSON.parse(localStorage.getItem('todos'));
    }

    data.push(todo);

    localStorage.setItem('todos' , JSON.stringify(data));
}
function getDataFromStorage(){
    let data =[];
    if(localStorage.getItem('todos')){
        data = JSON.parse(localStorage.getItem('todos'))
    }

    return data

}
function createTodo(todo){
    let status = false
    if(!todo.status == 'active'){
        status = false;
    }

   return `
    <li>
         <div class="check-name">
        <input type="checkbox" ${status ? 'checked' : ''}>
        <p>${todo.text}</p>
         </div>

         <div class="actions">
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-regular fa-trash-can"></i>
         </div>
 </li>
    `;
   
}

export{
    validate , saveDataLoxalStorage , getDataFromStorage , createTodo
}