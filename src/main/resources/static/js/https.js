let getApi = (url) => {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
    }).then(res => {
        return res.json()
    }).catch(error => console.log(error))
}

let postApi = (url, data) => {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    }).then(() => console.log())
}

let putApi = (url,data) => {
    return fetch(url, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:{
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
        redirect: 'follow',
        referrer: 'no-referrer',
    })
}

let deleteApi = (url) => {
    return fetch(url, {
        method: 'DELETE'
    })
}