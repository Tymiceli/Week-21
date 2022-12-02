var usernameTextbox = document.querySelector('#username')

var eyeIcons = document.querySelectorAll('.fa-eye')

eyeIcons.forEach( (eyeIcon) => {
    eyeIcon.addEventListener('click', () => {
        if (eyeIcon.classList.contains('fa-eye')) {
            eyeIcon.classList.replace('fa-eye','fa-eye-slash')
            if(eyeIcon.getAttribute('id') === 'passwordIcon') {
                document.querySelector("#password").type = 'text'
            } else {
                document.querySelector("#confirmPassword").type = 'text'
            }
        } else {
            eyeIcon.classList.replace('fa-eye-slash','fa-eye')
            if(eyeIcon.getAttribute('id') === 'passwordIcon') {
                document.querySelector("#password").type = 'password'
            } else {
                document.querySelector("#confirmPassword").type = 'password'
            }

        }
    })
})
// This is for demo purposes
// function myPromise() {
//     return new Promise((resolve, reject) => {
//         let i = 1
//         if (i === 1) {
//             resolve("Hey, i === 1, so we're cool!")
//         } else {
//             reject ("FAIL, i is not 1")
//         }
//     })
// }

// myPromise().then ( (message) => {
//     console.log(message)
// } ).catch ( (message) => {
//     console.log(message)
// })

usernameTextbox.addEventListener('blur', () => { 
    var user = {
        'username': usernameTextbox.value
    }
    syncCheckIfUserExists(user)
    
})

async function syncCheckIfUserExists(user) {
    let something = await checkIfUserExists(user)
    console.log('FETCH COMPLETE')
}

async function checkIfUserExists (user) {
    let responseEntity = await fetch('/users/exists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    let userExists = await responseEntity.json()
        if (userExists === true) {
        // user exists
        console.log("Oops, this username already exists")
        usernameTextbox.focus()
        usernameTextbox.select()
        showErrorAnimation().then ( (message) => {
            console.log("We're now in the callback function")
            console.log(message)
            usernameTextbox.style.backgroundColor = 'rgb(255, 255, 255)'    
        })
    }
}

function showErrorAnimation() {
    return new Promise((resolve, reject) => {
        console.log("We're in the showErrorAnimation function")
        // perform error animation
        var i = 255
        var animationInterval = setInterval ( () => {
            i--
            usernameTextbox.style.backgroundColor = `rgb(255, ${i}, ${i})`
            if (i === 0) {
                clearInterval(animationInterval)
                resolve("Done executing animation code")
           }
        }, 1)
    })
}