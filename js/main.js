
// typed effect
let typed = new Typed(".typing-effect", {
    strings: ["virtual", "live", "remote", "fully online"],
    backSpeed: "9",
    typeSpeed: "9",
    loop: true,
  });

  // counting numbers
  $(".counter").counterUp({
    delay: 20,
    time: 2000,
  });

  const userName = JSON.parse(localStorage.getItem('user'));
if(userName) {
  document.querySelector('.navRight').style.display = 'none'
} else {
  document.querySelector('.ri-user-3-line').style.display = 'none'
}

const orderButton = document.querySelector('.mainTextButton');
orderButton.addEventListener('click', function() {
  if (userName) {
    location.href = '/dashboard.html'
  } else {
    location.href = '/register.html'
  }
})
