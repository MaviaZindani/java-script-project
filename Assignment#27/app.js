function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var task = document.createElement("li");
        task.textContent = taskInput.value;
        
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            task.parentNode.removeChild(task);
        };

        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = function() {
            var newTask = prompt("Edit task:", task.textContent);
            if (newTask !== null) {
                task.textContent = newTask;
            }
        };

        task.appendChild(deleteBtn);
        task.appendChild(editBtn);
        taskList.appendChild(task);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
