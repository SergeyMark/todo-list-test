const btnOnToDoWork = document.querySelector('.button');
const containerTextTodo = document.querySelector('.container-todo-text');

let arr = [];
let removeButton;


btnOnToDoWork.addEventListener('click', onBtnToDo);

function onBtnToDo(){
    const inputTextToDo = document.querySelector('.input');

    arr.push(inputTextToDo.value);

    containerTextTodo.innerHTML = createdMarkUp(arr);  

    removeButton = document.querySelector('.todo-btn');
    removeButton.addEventListener('click', onBtnDelete);
}


function createdMarkUp(array) {
    return array.map(item => 
        `<div class="box-todo-text">
            <p class="todo-text">${item}</p>
            <button type="button" class="todo-btn">Delete</button>
        </div>`).join('');
}

function onBtnDelete() {
    const itemDelete = document.querySelector('.box-todo-text');
    itemDelete.remove();
}




































































    







