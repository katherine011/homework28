const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

document.addEventListener("DOMContentLoaded", loadTask);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = input.value.trim();
  if (note !== "") {
    createTask(note);
    saveTask(note);
    input.value = "";
  }
});

function createTask(text) {
  let li = document.createElement("li");
  list.appendChild(li);

  let taskstext = document.createElement("p");
  taskstext.textContent = text;
  li.appendChild(taskstext);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  li.appendChild(checkbox);

  let deleteBtn = document.createElement("img");
  deleteBtn.src = "./img/trash.png";
  deleteBtn.alt = "trash icon";
  deleteBtn.classList.add("delete");

  deleteBtn.addEventListener("click", () => {
    li.remove();
    removeTask(text);
  });

  li.appendChild(deleteBtn);
}

function saveTask(task) {
  let tasks = getTask();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTask() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function removeTask(removetask) {
  let tasks = getTask();
  tasks = tasks.filter((task) => task !== removetask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTask() {
  const tasks = getTask();
  tasks.forEach((task) => createTask(task));
}
