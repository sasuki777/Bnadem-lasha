const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function createTask() {
  
  const text = taskInput.value.trim();
  
  if (text === "") {
    return;
  }
  
  const li = document.createElement("li");
  li.className = "task";
  
  const span = document.createElement("span");
  span.textContent = text;
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "×";
  deleteButton.className = "delete";
  
  span.addEventListener("click", function() {
    li.classList.toggle("completed");
  });
  
  deleteButton.addEventListener("click", function() {
    li.remove();
  });
  
  li.appendChild(span);
  li.appendChild(deleteButton);
  
  taskList.appendChild(li);
  
  taskInput.value = "";
  taskInput.focus();
}

addTask.addEventListener("click", createTask);

taskInput.addEventListener("keydown", function(event) {
  
  if (event.key === "Enter") {
    createTask();
  }
  
});