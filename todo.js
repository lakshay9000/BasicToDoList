const todoList = [
    
];
renderTodoList();

function renderTodoList(){
    let todoListHtml = '';
    for(let i=0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button
                onclick=
                "
                    todoList.splice(${i}, 1);
                    renderTodoList();
                "
                class= "delete-btn"
            >Delete</button>`;
        todoListHtml += html;
    }
    document.querySelector('.todoDiv').innerHTML = todoListHtml;
}

function addItem(){
    const inputValue = document.querySelector('.todoInput');
    const name = inputValue.value;

    const dateInputValue = document.querySelector('.todoDate');
    const dueDate = dateInputValue.value;

    todoList.push({
        name, 
        dueDate
    });
    inputValue.value = '';
    renderTodoList();
}