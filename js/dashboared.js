const backToHomeButton = document.querySelector('#backButton');
const userName = JSON.parse(localStorage.getItem('user'));
const showModal = document.querySelector('.modalBody');
let answer;
if (userName) {
    document.querySelector('.user').textContent = userName
}
backToHomeButton.addEventListener('click', function() {
        location.href = '/index.html'
})

const logoutButton = document.querySelector('#logout')
logoutButton.addEventListener('click', function() {
    document.querySelector('.modal-bg').style.display = 'flex'
})

function closeLogoutModal() {
    document.querySelector('.modal-bg').style.display = 'none'
} 
document.querySelector('.cancel').addEventListener('click', function() {
    closeLogoutModal()
})
document.querySelector('.closeModal').addEventListener('click', function() {
    closeLogoutModal()
})
document.querySelector('.ok').addEventListener('click', function () {
    localStorage.clear();
    location.href = '/login.html'
})

document.querySelector('.navIcon').addEventListener('click', function() {
    document.querySelector('.userModal').classList.toggle('showModal')
})
const newYear = document.querySelector('.year')
const currentYear = new Date().getFullYear();
newYear.textContent = currentYear;

document.querySelector('.modalUser').textContent = userName
console.log(userName, document.querySelector('.modalUser'));
