function addTask() {
    let title = document.getElementById("taskTitle").value;
    let description = document.getElementById("taskDescription").value;
    if (title === "" || description === "") {
        alert("Please fill in both fields.");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `<span>${title}: ${description}</span> 
                    <button onclick="completeTask(this)">✔</button>
                    <button onclick="deleteTask(this)">❌</button>`;
    document.getElementById("pendingTasks").appendChild(li);
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
}
function completeTask(button) {
    let li = button.parentElement;
    li.classList.add("completed");
    document.getElementById("completedTasks").appendChild(li);
    button.remove();
}
function deleteTask(button) {
    button.parentElement.remove();
}