const btnOnToDoWork = document.querySelector('.button');
const containerTextTodo = document.querySelector('.container-todo-text');

let arr = [];
// let removeButton;


btnOnToDoWork.addEventListener('click', onBtnToDo);

function onBtnToDo(){
    const inputTextToDo = document.querySelector('.input');

    arr.push(inputTextToDo.value);

    containerTextTodo.innerHTML = createdMarkUp(arr);  

    let removeButton = document.querySelector('.todo-btn');
    removeButton.addEventListener('click', onBtnDelete);

    if (removeButton) {
        arr.splice(0, 1);
    }
}


function createdMarkUp(array) {
    return array.map(item => 
        `<div class="box-todo-text">
            <p class="todo-text">${item}</p>
            <button type="button" class="todo-btn">Del</button>
        </div>`).join('');
}


function onBtnDelete() {
    const itemDelete = document.querySelector('.box-todo-text');
    itemDelete.remove();
}



































































    







