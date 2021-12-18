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

export const getTaskById = (token, id) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token}
    };
    return fetch(`api/tasks/${id}`, requestOptions).then(data =>
        data.json()
    )
}

// usertasks

export const getUserTasksForUser = async (token, userId) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token}
    };
    const usertasks = await fetch(`api/users/usertasks/${userId}`, requestOptions).then(data =>
        data.json()
    )
    return Promise.all(usertasks.map(async (usertask) => {
        const task = await getTaskById(token, usertask.taskId);
        const subject = await getSubjectById(token, task.subjectId);
        return { ...usertask, task: { ...task, subject: subject } };
    }))
}

export const updateUserTask = (token, userTask) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
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

export const getSubjectById = (token, id) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token}
    };
    return fetch(`api/subjects/${id}`, requestOptions).then(data =>
        data.json()
    )
}

export const getAllSubjects = async (token) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token}
    };
    return fetch('api/subjects', requestOptions).then(data =>
        data.json()
    )
}

export const enrollUserToSubject = async (token, userId, subjectId) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Authorization': 'Bearer ' + token}
    };
    return fetch(`api/users/${userId}/addsubject/${subjectId}`, requestOptions)
}