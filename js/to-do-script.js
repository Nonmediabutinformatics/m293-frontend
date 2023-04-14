import { getAllTasks, getTask, updateTask, deleteTask, addTask } from './script.js';
const todoColumn = document.getElementById('todo-tasks');
const doneColumn = document.getElementById('done-tasks');

// Parameter handling
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let ids = urlParams.getAll('id').map(id => parseInt(id));
if (ids.length === 0) {
    ids = null;
} else {
    document.getElementById('add-task-form').style = "display: none";
}

// Add a new task
    const addTaskForm = document.getElementById('add-task-form');
    addTaskForm.addEventListener('submit', event => {
        event.preventDefault();

        const titleInput = document.getElementById('title');

        const newTask = {
            title: titleInput.value,
            completed: false,
        };

        addTask(newTask)
            .then(response => {
                if (response.success) {
                    const taskBox = createTaskBox(response.task);
                    todoColumn.appendChild(taskBox);
                    // Formular zurücksetzen
                    titleInput.value = '';
                } else {
                    console.error(response.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });


// Create task box
function createTaskBox(task) {
    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box');
    taskBox.dataset.taskId = task.id;

    // Create the task name element
    const taskName = document.createElement('span');
    taskName.classList.add('task-name');
    taskName.innerText = hyphenateLongWords(task.title);
    taskBox.appendChild(taskName);

    // Create the input element for editing the task name
    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    editInput.type = 'text';
    editInput.value = task.title;
    editInput.style.display = 'none';
    taskBox.appendChild(editInput);

    // Double-click listener to enable editing
    taskName.addEventListener('dblclick', () => {
        taskName.style.display = 'none';
        editInput.style.display = 'inline';
        editInput.focus();
    });

    // Keypress listener to update task name on Enter key press
    editInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const newTitle = editInput.value.trim();
            if (newTitle !== '') {
                task.title = newTitle;
                updateTask(task)
                    .then(response => {
                        if (response.success) {
                            taskName.innerText = hyphenateLongWords(newTitle);
                            taskName.style.display = 'inline';
                            editInput.style.display = 'none';
                        } else {
                            console.error(response.message);
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    });

    editInput.addEventListener('blur', () => {
        const newTitle = editInput.value.trim();
        if (newTitle !== '') {
            task.title = newTitle;
            updateTask(task)
                .then(response => {
                    if (response.success) {
                        taskName.innerText = hyphenateLongWords(newTitle);
                        taskName.style.display = 'inline';
                        editInput.style.display = 'none';
                    } else {
                        console.error(response.message);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    });

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        deleteTask(task.id)
            .then(response => {
                if (response.success) {
                    taskBox.remove();
                } else {
                    console.error(response.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
    taskBox.appendChild(deleteButton);

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.innerText = task.completed ? 'Undo' : 'Done';
    toggleButton.classList.add('toggle-btn');
    toggleButton.addEventListener('click', () => {
        task.completed = !task.completed;
        updateTask(task)
            .then(response => {
                if (response.success) {
                    if (task.completed) {
                        doneColumn.appendChild(taskBox);
                    } else {
                        todoColumn.appendChild(taskBox);
                    }
                    toggleButton.innerText = task.completed ? 'Undo' : 'Done';
                } else {
                    console.error(response.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
    taskBox.appendChild(toggleButton);

    return taskBox;
}



// Sort into To do and Done colum
function fillTaskColumns(tasks) {
    const todoColumn = document.getElementById('todo-tasks');
    const doneColumn = document.getElementById('done-tasks');

    tasks.forEach(task => {
        console.log(task)
        const taskBox = createTaskBox(task);
        if (task.completed) {
            doneColumn.appendChild(taskBox);
        } else {
            todoColumn.appendChild(taskBox);
        }
    });
}

// Get all tasks or some tasks specific
if (ids === null) {
    getAllTasks()
        .then(response => {
            if (response.success) {
                fillTaskColumns(response.tasks);
            } else {
                console.error(response.message);
            }
        })
        .catch(error => {
            console.error(error);
        });
} else {
    Promise.all(ids.map(id => getTask(id)))
        .then(responses => {
            const tasks = [];
            const notFoundIds = [];
            responses.forEach(response => {
                if (response.success) {
                    tasks.push(response.task);
                } else {
                    notFoundIds.push(response.id);
                }
            });
            if (tasks.length > 0) {
                fillTaskColumns(tasks);
            }
            if (notFoundIds.length > 0) {
                alert(`Id ${notFoundIds.join(', ')} not found`);
            }
        })
        .catch(error => {
            console.error(error);
        });
}



// Make some long words shorter with -
function hyphenateLongWords(text) {
    const words = text.split(' ');
    const hyphenatedWords = words.map(word => {
        if (word.length > 40) {
            return word.replace(/(.{40})/g, '$1-\n');
        }
        return word;
    });
    return hyphenatedWords.join(' ');
}
