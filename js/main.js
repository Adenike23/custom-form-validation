
// typed effect
let typed = new Typed(".typing-effect", {
    strings: ["virtual", "live", "remote", "fully online"],
    backSpeed: "9",
    typeSpeed: "9",
    loop: true,
  });


  const userName = JSON.parse(localStorage.getItem('user'));
if(userName) {
  document.querySelector('.navRight').style.display = 'none';
  console.log(document.querySelector('.navRight'));
} else {
  document.querySelector('.ri-user-3-line').style.display = 'none'
}