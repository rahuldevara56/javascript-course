const TodoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){

  let TodoListHTML = '';

  TodoList.forEach((TodoObject, index) => {
    
    const {name, dueDate} = TodoObject;
    const html= `
    <div class=""> ${name}</div> 
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    TodoListHTML += html;
  });

 /*for (let i=0; i < TodoList.length; i++) {
  const TodoObject = TodoList[i];
  //const name = TodoObject.name;
  //const dueDate = TodoObject.dueDate;
  const {name, dueDate} = TodoObject;
  const html= `
  <div class=""> ${name}</div> 
  <div>${dueDate}</div>
  <button class="delete-todo-button" onclick="
    TodoList.splice(${i},1);
    renderTodoList();
  ">Delete</button>
  `;
  TodoListHTML += html;
};
*/



document.querySelector('.js-todo-list')
 .innerHTML = TodoListHTML;

 document.querySelectorAll('.js-delete-todo-button')
 .forEach(( deleteButton, index) => {
  deleteButton.addEventListener('click',() => {
    TodoList.splice(index,1);
    renderTodoList();
  });
});



};

document.querySelector('.js-add-todo-button')
 .addEventListener('click',() => {
    addTodo();
});

function addTodo () {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input')
 const dueDate = dateInputElement.value;

 TodoList.push({
 // name: name,
 // dueDate: dueDate,
  name,
  dueDate
 }
);



 inputElement.value = '';

 renderTodoList();

};