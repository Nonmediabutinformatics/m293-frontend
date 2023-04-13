const server = "http://localhost:3000"

//'Authorization': 'Bearer ' + ACCESS_TOKEN

// Delete a task
function deleteTask(taskId) {
    const url = `${server}/task/${taskId}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            return { success: true, message: 'Task deleted successfully.' };
        })
        .catch(error => {
            console.error('Error:', error);
            return { success: false, message: 'An error occurred while deleting the task.' };
        });
}

// Get a task
function getTask(taskId) {
    const url = `${server}/task/${taskId}`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            return { success: true, task: data };
        })
        .catch(error => {
            console.error('Error:', error);
            return { success: false, message: 'An error occurred while retrieving the task.' };
        });
}

// Get all tasks
function getAllTasks() {
    const url = `${server}/tasks`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            return { success: true, tasks: data };
        })
        .catch(error => {
            console.error('Error:', error);
            return { success: false, message: 'An error occurred while retrieving the tasks.' };
        });
}

// Add a new task
function addTask(task) {
    return fetch(`${server}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error adding task');
            }
        })
        .then(data => {
            return { success: true, task: data };
        })
        .catch(error => {
            return { success: false, message: error.message };
        });
}

// Update a Task
function updateTask(task) {
    return fetch(`${server}/tasks`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error updating task.');
            }
        })
        .then(data => {
            return {
                success: true,
                task: data
            };
        })
        .catch(error => {
            return {
                success: false,
                message: error.message
            };
        });
}





/*
// Tests
getTask(1).then(result => {
    if (result.success) {
        document.write(JSON.stringify(result.task));
    } else {
        document.write(result.message);
    }
});

// Retrieve all tasks
getAllTasks().then(result => {
    if (result.success) {
        // Display the first task
        getTask(result.tasks[0].id).then(result => {
            if (result.success) {
                document.write("test" + JSON.stringify(result.task));
            } else {
                document.write(result.message);
            }
        });
    } else {
        document.write(result.message);
    }
});

// Add new task
const newTask = {
    completed: false,
    title: 'Take out trash'
  };
  
  addTask(newTask).then(result => {
    if (result.success) {
      document.write(JSON.stringify(result.task));
    } else {
      document.write(result.message);
    }
  });

// Update an existing task with ID 1
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
*/
