var usernameTextbox = document.querySelector('#username')

usernameTextbox.addEventListener('blur', () => { 
    var user = {
        'username': usernameTextbox.value
    }
    fetch('/users/exists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then( (responseEntity) => responseEntity.json() )
    .then( (data) => {
        if (data === true) {
            // user exists
            console.log("Oops, this username already exists")
            usernameTextbox.focus()
            usernameTextbox.select()
        }
    })
})