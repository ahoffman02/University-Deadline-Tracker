export const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({Username: username, Password: password})
    };
    return fetch('api/account/login', requestOptions).then(response => {
            if (response.status === 200) {
                return response.json()
            } else
                return null
        }
    )
}

// tasks

export const getTaskById = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    };
    return fetch(`api/tasks/${id}`, requestOptions).then(data =>
        data.json()
    )
}

// usertasks

export const getUserTasksForUser = async () => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    };
    const usertasks = await fetch(`api/users/usertasks/${JSON.parse(sessionStorage.getItem('user')).id}`, requestOptions).then(data =>
        data.json()
    )
    return Promise.all(usertasks.map(async (usertask) => {
        const task = await getTaskById(usertask.taskId);
        const subject = await getSubjectById(task.subjectId);
        return {...usertask, task: {...task, subject: subject}};
    }))
}

export const updateUserTask = (userTask) => {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(userTask),
    };
    return fetch(`api/userstasks/${userTask.id}`, requestOptions)
};

// user

export const addUser = (user) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    };
    return fetch('api/users', requestOptions)
}

// subjects

export const getSubjectById = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    };
    return fetch(`api/subjects/${id}`, requestOptions).then(data =>
        data.json()
    )
}

export const getAllSubjects = async () => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    };
    return fetch('api/subjects', requestOptions).then(data =>
        data.json()
    )
}

export const enrollUserToSubject = async (subjectId) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    };
    return fetch(`api/users/${JSON.parse(sessionStorage.getItem('user')).id}/addsubject/${subjectId}`, requestOptions)
}