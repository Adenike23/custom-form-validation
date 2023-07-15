const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (email.value.length <= 0 || password.value.length <= 0) {
        warning.textContent = 'Please fill all fields'
    } else if(password.value.length < 6) {
        warning.textContent = 'password must be at least 6 characters'
    } else{
        location.href = '/dashboard.html'
    }
})