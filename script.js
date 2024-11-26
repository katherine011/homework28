const input = document.getElementById("note");
const taskList = document.querySelector(".task-list");
const addButton = document.querySelector(".button");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToUI(task, index) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  taskInfo.innerHTML = `
    <h4>${task.title}</h4>
    <span>${task.time}</span>`;

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const checkboxLabel = document.createElement("label");
  checkboxLabel.classList.add("check");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
    taskItem.classList.toggle("completed", task.completed);
  });

  const checkboxSpan = document.createElement("span");
  checkboxLabel.appendChild(checkbox);
  checkboxLabel.appendChild(checkboxSpan);

  const deleteButton = document.createElement("img");
  deleteButton.src = "./akar-icons_trash-can.png";
  deleteButton.alt = "Delete Task";

  deleteButton.addEventListener("click", () => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  });
  taskActions.appendChild(checkboxLabel);
  taskActions.appendChild(deleteButton);

  taskItem.appendChild(taskInfo);
  taskItem.appendChild(taskActions);

  taskItem.classList.toggle("completed", task.completed);

  taskList.appendChild(taskItem);
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => addTaskToUI(task, index));
}

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const newTask = {
    title: text,
    time: "Today",
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  input.value = "";
});

renderTasks();
