document.addEventListener("DOMContentLoaded",function(){
    const form = document.querySelector(".form")
    const todoInput = document.querySelector(".input")
    const todoSubmit = document.querySelector(".todo-submit")
    const todoList = document.querySelector(".todo-list")
    let editmode = false
    let editItem = null

    form.addEventListener("submit",function(e){
        e.preventDefault()
        const todoText = todoInput.value.trim()
     if(todoText !== ""){
        if(editmode){
            editItem.firstChild.textContent = todoText
            todoSubmit.innerText = "+Add"
            editmode = false
            editItem = null
        }else{ 
            addTodo(todoText)
        }
        todoInput.value = ""
     }else{
        alert("Enter valid task")
     }
    })
  todoList.addEventListener("click",function(e){
    const target = e.target
    if(target.tageName === "BUTTON"){
        const todoItem = target.parentNode
        if(target.innerText === "❌"){
            todoItem.remove()
        }
        else if(target.innerText === "✏️"){
            editmode = true
            editItem = todoItem
            todoSubmit.innerText = "Edit Todo"
            todoInput.value = todoItem.firstChild.textContent
            todoInput.focus()
        }
    }
  })

    function addTodo(todoText){
        const todoItem = document.createElement("li")
        const editButton = document.createElement("button")
        const deleteButoon = document.createElement("button")

        todoItem.innerHTML = `<span>${todoText}</span>`
        editButton.innerText = `✏️`
        deleteButoon.innerText = `❌`
        todoItem.appendChild(editButton)
        todoItem.appendChild(deleteButoon)

        todoList.appendChild(todoItem)
    }
 })