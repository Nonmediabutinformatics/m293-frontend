const server = "http://localhost:3000"
let token;

// Take the token
try {
    token = localStorage.getItem('jwtToken');
} catch {
    token = null;
}

// Check the Serverstatus
function checkServerStatus() {
    fetch('http://localhost:3000')
      .then(response => {
        if (response.status === 200) {
            //showAlert('Server is running!');
        } else {
            showAlert('The server is not running. The website will not work as expected.');
        }
      })
      .catch(error => {
        console.error(error)
        showAlert('The server is not running. The website will not work as expected.')
      });
  }  

// Generate JWT token
function authJwtSignPost(email, password) {
    const url = `${server}/auth/jwt/sign`;
    const data = { email: email, password: password };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 400) {
                throw new Error('Invalid email/password supplied');
            } else {
                throw new Error('Error generating JWT token');
            }
        })
        .then(data => {
            return { success: true, token: data.token, message: 'Login Successful.' };
        })
        .catch(error => {
            console.error('Error:', error);
            return { success: false, message: 'An error occurred while logging in.' };
        });
}

// Delete a task
function deleteTask(taskId) {
    const url = `${server}/auth/jwt/task/${taskId}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            if (response.status === 401) {
                window.location.href = 'login.html';
            }
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
    const url = `${server}/auth/jwt/task/${taskId}`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            if (response.status === 401) {
                window.location.href = 'login.html';
            }
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            return { success: true, task: data, message: 'Task received successfully.' };
        })
        .catch(error => {
            console.error('Error:', error);
            return { success: false, message: 'An error occurred while retrieving the task.', id: taskId };
        });
}


// Get all tasks
function getAllTasks() {
    const url = `${server}/auth/jwt/tasks`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            if (response.status === 401) {
                window.location.href = 'login.html';
                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            return { success: true, tasks: data, message: 'The tasks received successfully.' };
        })
        .catch(error => {
            console.error('Error:', error);
            return { success: false, message: 'An error occurred while retrieving the tasks.' };
        });
}

// Add a new task
function addTask(task) {
    return fetch(`${server}/auth/jwt/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(task)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 401) {
                window.location.href = '/login.html';
            } else {
                throw new Error('Error adding task');
            }
        })
        .then(data => {
            return { success: true, task: data, message: 'Task successfully added.' };
        })
        .catch(error => {
            return { success: false, message: 'An error occurred while adding the task.' };
        });
}


// Update a Task
function updateTask(task) {
    return fetch(`${server}/auth/jwt/tasks`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(task)
    })
        .then(response => {
            if (response.status === 401) {
                window.location.href = 'login.html';
                throw new Error('Unauthorized');
            } else if (response.ok) {
                return response.json();
            } else if (response.status === 400) {
                throw new Error('Invalid ID supplied');
            } else if (response.status === 404) {
                throw new Error('Task not found');
            } else {
                throw new Error('Error updating task.');
            }
        })
        .then(data => {
            return { success: true, task: data, message: 'Task updated successfully.' };
        })
        .catch(error => {
            return { success: false, message: 'An error occurred while updating the task.' };
        });
}

// Verify the token
function verifyToken() {
    return fetch(`${server}/auth/jwt/verify`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Error verifying token');
            }
        })
        .then(data => {
            return { success: true, email: data.email, message: 'Veryfication successful.' };
        })
        .catch(error => {
            return { success: false, message: 'An error occurred while verification.' };
        });
}

// Logout
function logout() {
    localStorage.removeItem('jwtToken');
}

// Better alert
function showAlert(text) {
    var alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container';
    var alertContent = document.createElement('div');
    alertContent.className = 'alert-content';
    var alertText = document.createElement('div');
    alertText.className = 'alert-text';
    alertText.innerHTML = text;
    alertContent.appendChild(alertText);

    var okButton = document.createElement('button');
    okButton.className = 'ok-button';
    okButton.innerHTML = 'OK';
    okButton.addEventListener('click', function () {
        alertContainer.parentNode.removeChild(alertContainer);
    });

    alertContent.appendChild(okButton);
    alertContainer.appendChild(alertContent);

    document.body.appendChild(alertContainer);
}

// Check the Serverstatus
checkServerStatus()

// Export modules
export {
    authJwtSignPost,
    deleteTask,
    getTask,
    getAllTasks,
    addTask,
    updateTask,
    verifyToken,
    logout,
    showAlert
};