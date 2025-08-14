// document.addEventListener("DOMContentLoaded",function(){
//     const todoForm = document.querySelector(".todo-form")
//     const todoInput = document.querySelector(".todo-input")
//     const todoList = document.querySelector(".todo-list")
//     const todoSubmit = document.querySelector(".todo-submit")
//     let editMode = false 
//     let editItem = null

//     todoForm.addEventListener("submit",function(e){
//         e.preventDefault()
//         const todoText = todoInput.value.trim()
//         if(todoText !== ""){
//         if(editMode){
//             editItem.firstChild.textContent = todoText
//             todoSubmit.innerText = "+Add"
//             editMode = false
//             editItem = null

//         }
//         else{
//                 addTodoItem(todoText)
//         }
//         todoInput.value = ""
//         }
        
//         else{
//             alert("Please enter valid task")
//         }
//     })
//     todoList.addEventListener("click" , function(e){
//         const target = e.target
//         if(target.tagName === "BUTTON"){
//             const todoItem = target.parentNode
//             if(target.innerText === "❌"){
//                 todoItem.remove()
//             }
//             else if(target.innerText ==='✏️'){
//                 editMode = true
//                 editItem = todoItem
//                 todoSubmit.innerText = "Edit Todo"
//                 todoInput.value = todoItem.firstChild.textContent
//                 todoInput.focus()
//             }
//         }
//     })

//     function addTodoItem(todoText){
//         const todoItem = document.createElement("li")
//         const editButton = document.createElement("button")
//         const deleteButton = document.createElement("button")

//         todoItem.innerHTML = `<span>${todoText}</span>`
//         editButton.innerText = `✏️`
//         deleteButton.innerText = `❌`

//         todoItem.appendChild(editButton)
//         todoItem.appendChild(deleteButton)
//         todoList.appendChild(todoItem)
//     }
// })

document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submit");

  let editMode = false;
  let editItem = null;

  // Load from localStorage on page load
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  renderTodos();

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      if (editMode) {
        // Update in array
        const index = todos.findIndex(
          (item) => item === editItem.firstChild.textContent
        );
        todos[index] = todoText;
        localStorage.setItem("todos", JSON.stringify(todos));

        editItem.firstChild.textContent = todoText;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editItem = null;
      } else {
        // Add todo to array & localStorage
        todos.push(todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
        addTodoItem(todoText);
      }
      todoInput.value = "";
    } else {
      alert("Please Enter a valid Task");
    }
  });

  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      const todoText = todoItem.firstChild.textContent;

      if (target.innerText === "❌") {
        // Remove from array & localStorage
        todos = todos.filter((item) => item !== todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
        todoItem.remove();
      } else if (target.innerText === "✏️") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoText;
        todoInput.focus();
      }
    }
  });

  function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    todoItem.innerHTML = `<span>${todoText}</span>`;
    editButton.innerText = `✏️`;
    removeButton.innerText = `❌`;

    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }

  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo) => addTodoItem(todo));
  }
});
