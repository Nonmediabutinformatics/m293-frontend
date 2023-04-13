import {updateTask} from './script.js';

const updatedTask = {
    id: 1,
    completed: true,
    title: "Walk the dog"
};

updateTask(updatedTask)
    .then(result => {
        if (result.success) {
            console.log("Task successfully updated:", result.task);
        } else {
            console.error("Error updating task:", result.message);
        }
    })
    .catch(error => {
        console.error("Error updating task:", error);
    });