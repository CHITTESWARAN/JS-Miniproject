let taskList = document.getElementById('task-list8');
let theform = document.getElementById('thetask');
let username = document.getElementById('username');


theform.addEventListener("submit", (event) => {
    event.preventDefault();
    createTask();
});


function getthetask() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}


function updateweb(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function createTask() {
    let taskText = username.value.trim();
    if (!taskText) return;

    let tasks = getthetask();
    let taskObj = {
        id: Date.now(),
        text: taskText, 
        isCompleted: false
    };
    tasks.push(taskObj);
    updateweb(tasks);
    aupdatepage();
    username.value = "";
}


function Deletetask(id) {
    let tasks = getthetask();
    tasks = tasks.filter(task => task.id !== id);
    updateweb(tasks);
    aupdatepage();
}


function editTask(id) {
    let tasks = getthetask();
    const task = tasks.find(task => task.id === id);
    if (task) {
        username.value = task.text;
        document.getElementById('savebtn').innerHTML = `<button onclick="confirmEdit(${id})" class="btn btn-primary">Save</button>`;
    }
}


function confirmEdit(id) {
    const text = username.value.trim();
    if (text) {
        let tasks = getthetask();
        const task = tasks.find(task => task.id === id);
        if (task) {
            task.text = text;
            updateweb(tasks);
            aupdatepage();
            username.value = "";
            document.getElementById('savebtn').innerHTML = '';
        }
    }
}

function thetaskacompleted(id, isCompleted) {
    let tasks = getthetask();
    tasks.forEach((task) => {
        if (task.id === id) {
            task.isCompleted = isCompleted;
        }
    });
    updateweb(tasks);
    aupdatepage();
}


function aupdatepage() {
    let tasks = getthetask();
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        taskList.innerHTML += `
            <li style="background-color: grey;" class="list-group-item mb-2">
                <input type="checkbox" class="task-checkbox" ${task.isCompleted ? 'checked' : ''} data-id="${task.id}">
                <span id="${task.id}" class="${task.isCompleted ? 'text-decoration-line-through' : ''}">${task.text}</span>
                <button class="edit-task float-end" onclick="editTask(${task.id});">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="delete-task float-end me-2">
                    <i class="fa-solid fa-trash-can" onclick="Deletetask(${task.id});"></i>
                </button>
            </li>`;
    });

    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            let id = parseInt(event.target.getAttribute('data-id'));
            let isCompleted = event.target.checked;
            thetaskacompleted(id, isCompleted);
        });
    });
}


aupdatepage();
