// // ტექსტური ველის, ღილაკისა და სიის ელემენტების არჩევა
// const input = document.getElementById("input"); // ტექსტური ველი დავალებისთვის
// const addButton = document.getElementById("addButton"); // დავალების დამატების ღილაკი
// const taskList = document.getElementById("taskList"); // სია, სადაც დავალებები გამოჩნდება

// // ფუნქცია, რომელიც ქმნის ახალ დავალებას
// function addTask(task) {
//   // ახალი სიის ელემენტის (li) შექმნა
//   const li = document.createElement("li");

//   // დავალების ტექსტისთვის span-ის შექმნა
//   const taskSpan = document.createElement("span");
//   taskSpan.textContent = task; // დავალების ტექსტი

//   // ჩექბოქსის შექმნა
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox"; // ჩექბოქსის ტიპი
//   checkbox.addEventListener("change", () => {
//     li.classList.toggle("completed"); // დამატება/წაშლა "completed" კლასის
//   });

//   // წაშლის ღილაკის შექმნა
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete"; // ღილაკის ტექსტი
//   deleteButton.classList.add("delete-btn"); // კლასის დამატება
//   deleteButton.addEventListener("click", () => {
//     li.remove(); // ელემენტის წაშლა სიისგან
//   });

//   // ყველა ელემენტის დამატება ახალ <li> ელემენტში
//   li.appendChild(checkbox);
//   li.appendChild(taskSpan);
//   li.appendChild(deleteButton);

//   // ახალი <li> ელემენტის დამატება სიისთვის
//   taskList.appendChild(li);
// }

// // ღილაკზე (Add Task) მოვლენის დამატება
// addButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   const taskText = input.value.trim(); // ტექსტური ველის მნიშვნელობის მიღება
//   if (taskText === "") {
//     // თუ ტექსტი ცარიელია
//     alert("Please enter a task!"); // გაფრთხილება
//     return;
//   }

//   addTask(taskText); // დავალების დამატება
//   input.value = ""; // ტექსტური ველის გასუფთავება
// });

const input = document.getElementById("input");
const List = document.getElementById("List");
const button = document.getElementById("button");

function addTask(task) {
  let li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = task;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("deleteBtn");
  deleteBtn.textContent = "Delete";

  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.innerHTML = `<div id="box">
      <span id="task">${task}</span>
      <div id="last">
        <input type="checkbox" id="checkbox" />
        <button id="deleteBtn">
        <img src="img/trash.png" alt="trash icon" id="img" />
        </button>
      </div>
    </div>`;

  List.appendChild(li);
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  input.value = "";
  const text = input.value;

  addTask(text);
});

button.addEventListener("click", () => {
  const li = document.createElement("li");

  li.classList.add("li");
  li.innerText = input.value;

  list.appendChild(li);

  input.value = "";

  const dlt = document.createElement("dlt");

  dlt.classList.add("dlt");
  dlt.innerHTML = `<img src="img/trash.png" alt="trash icon" />`;

  list.appendChild(dlt);

  dlt.addEventListener("click", () => {
    list.remove(li);
  });

  const checkbox = createElement("checkbox");

  checkbox.classList("checkbox");
  checkbox.innerHTML = `<img src="img/checkbox.png" alt="checkbox icon" />`;
  checkbox.type = "checkbox";

  list.appendChild(checkbox);

  checkbox.addEventListener("click", () => {
    checkbox.style.textDecoration = "line-through";
  });
});

function addNote() {
  const addToInput = input.ariaValueMax.trim();

  if (task) {
    addToList(task);

    input.value = "";

    saveNote();
  }
}

button.addEventListener("click", addNote);

function addToList(task) {
  const li = document.createElement("li");

  li.textContent = task;

  list.appendChild(li);
}

function saveNote() {
  let note = [];
  list.querySelectorAll("li").forEach((item) => {
    note.push(item.textContent.trim());
  });

  localStorage.setItem("note", JSON.stringify(note));
}
