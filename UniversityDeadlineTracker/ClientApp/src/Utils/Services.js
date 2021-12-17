export const login=(username,password)=>{
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