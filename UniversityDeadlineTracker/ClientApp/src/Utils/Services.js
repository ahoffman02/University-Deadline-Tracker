export const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({Username: username, Password: password})
    };
    return fetch('api/account/login', requestOptions)
}

export const getAllTasks = (token) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token}
    };
    return fetch('api/tasks', requestOptions).then(data =>
        data.json()
    )
}

export const getTaskById = (token, id) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token}
    };
    return fetch(`api/tasks/${id}`, requestOptions).then(data =>
        data.json()
    )
}

export const getAllUserTasks = async (token) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token}
    };
    const usertasks = await fetch('api/userstasks', requestOptions).then(data =>
        data.json()
    )
    return Promise.all(usertasks.map(async (usertask) => {
        const task = await getTaskById(token, usertask.taskId);
        return {...usertask, task: task}
    }))
}