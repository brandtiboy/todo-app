function addTodo() {
    let newTodoText = document.getElementById("todo").value;

    let done = document.createElement("button");
    done.classList.add("done");
    done.innerHTML = '<i class="fas fa-check"></i>';

    let edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = '<i class="fas fa-wrench"></i>';

    let div = document.createElement('div');
    div.textContent = newTodoText;
    div.className = "theTodo";
    document.querySelector('.wrapper').appendChild(div);
    document.querySelector('.wrapper').appendChild(done);
    document.querySelector('.wrapper').appendChild(edit);
    document.getElementById("todo").value = "";
}

let addButton = document.getElementById("todo");

addButton.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add-todo").click();
    }
});

function doneTodo() {
    let removeTodo = document.querySelector(".theTodo");
    removeTodo.remove();
}