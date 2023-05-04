const darkMode = document.getElementById('darkmode');
const menuBtn = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('fa-sun');
    document.body.classList.toggle('active')
})

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
})

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};