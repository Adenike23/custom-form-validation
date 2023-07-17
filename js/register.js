

const fullName = document.querySelector('.fullName');
const userName = document.querySelector('.userName');
const email = document.querySelector('.email');
const phoneNumber = document.querySelector('.phoneNumber');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmPassword');
const warning = document.querySelector('#warning');
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordRegEx = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

// all inputs must have contents in them

//both password fields must match
//password must have length of at least 6 characters
//password has at least one uppercase, one lowercase and a number via regular expressions
//validate email to be am email via regular expressions
//validate phoneNumber to be a number 

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    console.log(fullName.value);
    if (fullName.value.length <= 0 || userName.value.length <= 0 || email.value.length <= 0 || 
        phoneNumber.value.length <= 0 || password.value.length <= 0 || confirmPassword.value.length <= 0) {
            warning.textContent = 'Please fill in all fields'
        } else if(password.value.length < 6) {
            warning.textContent = 'password must be at least 6 characters'
        } else if (password.value !== confirmPassword.value) {
            console.log(password.value, confirmPassword.value);
            warning.textContent = 'password fields must match'
        } else if (!Number(phoneNumber.value)) {
            warning.textContent = 'phone number must be a number'
        } else if (!emailRegEx.test(email.value)) {
            warning.textContent = 'email must be a valid mail'
        } else if(!passwordRegEx.test(password.value)) {
            warning.textContent = 'password strength is poor'
        }
        else{
            location.href = '/dashboard.html'
        }
})

