const backToHomeButton = document.querySelector('#backButton')
backToHomeButton.addEventListener('click', function() {
    let answer = confirm ('Are you sure you want to go back to home?')
    if (answer === true) {
        location.href = '/index.html'
    }
})

const logoutButton = document.querySelector('#logout')
logoutButton.addEventListener('click', function() {
    let answer = confirm ('Sure you want to log out?')
    if (answer === true) {
        location.href = '/login.html'
    }
})