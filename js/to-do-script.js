import { getAllTasks, updateTask, deleteTask, addTask } from './script.js';
const todoColumn = document.getElementById('todo-tasks');
const doneColumn = document.getElementById('done-tasks');

// Add a new task
const addTaskForm = document.getElementById('add-task-form');
addTaskForm.addEventListener('submit', event => {
    event.preventDefault(); // Verhindert das Neuladen der Seite

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



// Funktion zum Erstellen einer Aufgaben-Box
function createTaskBox(task) {
    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box');
    taskBox.innerText = task.title;

    // Buttons erstellen
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
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

    const toggleButton = document.createElement('button');
    toggleButton.innerText = task.completed ? 'Undo' : 'Done';
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

    // Buttons der Box hinzufügen
    taskBox.appendChild(deleteButton);
    taskBox.appendChild(toggleButton);

    return taskBox;
}

// Funktion zum Füllen der To-do- und Done-Spalten
function fillTaskColumns(tasks) {
    const todoColumn = document.getElementById('todo-tasks');
    const doneColumn = document.getElementById('done-tasks');

    tasks.forEach(task => {
        const taskBox = createTaskBox(task);
        if (task.completed) {
            doneColumn.appendChild(taskBox);
        } else {
            todoColumn.appendChild(taskBox);
        }
    });
}

// getAllTasks aufrufen und die Spalten füllen
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

