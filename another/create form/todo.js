document.addEventListener("DOMContentLoaded", loadTodos);

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
    const todoText = input.value.trim();
    if (todoText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `${todoText} <button class="delete">ลบ</button>`;
    
    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
        saveTodos();
    });

    todoList.appendChild(li);
    input.value = "";
    saveTodos();
}

function saveTodos() {
    const todos = Array.from(todoList.children).map(li => li.textContent.replace("ลบ", "").trim());
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `${todo} <button class="delete">ลบ</button>`;
        
        li.querySelector(".delete").addEventListener("click", function() {
            li.remove();
            saveTodos();
        });

        todoList.appendChild(li);
    });
}
