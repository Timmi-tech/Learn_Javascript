const todoList = [{
    name: 'make dishes',
    dueDate: '2022-12-22',
}, {
    name: 'wash plates',
    dueDate: '2022-12-22',
}];

renderTodoList();

function renderTodoList() {

    let todoListHTMl = '';


    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class = "delete-todo-button js-delete">
        Delete </button>
       `;
        todoListHTMl += html;
    })
    document.querySelector('.js-todo').innerHTML = todoListHTMl


    document.querySelectorAll('.js-delete')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            })

        })
}

document.querySelector('.js-todo-button')
    .addEventListener('click', () => {
        addTodo();
    })


function addTodo() {

    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value


    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value

    todoList.push({
        // name: name,
        // dueDate: dueDate,
        name,
        dueDate
    });
    inputElement.value = '';
    renderTodoList()
}