const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => li.classList.toggle("completed"));

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});
