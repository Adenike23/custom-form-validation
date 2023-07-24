const backToHomeButton = document.querySelector('#backButton');
const userName = JSON.parse(localStorage.getItem('user'));
let answer;
if (userName) {
    document.querySelector('.user').textContent = userName
}
backToHomeButton.addEventListener('click', function() {
    answer = confirm ('Are you sure you want to go back to home?')
    if (answer === true) {
        location.href = '/index.html'
    }
})

// if (userName) {
//     location.href = '/dashboard.html'
// }

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

// localStorage.setItem('items', 'item1 item2 item3');
// localStorage.setItem('list', JSON.stringify({'item1':'bag', 'item2': 'cup', 'item3': 'shoe'}));
// console.log(localStorage.getItem('items'));
// console.log(JSON.parse(localStorage.getItem('list')).item1);
