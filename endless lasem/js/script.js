// toggle
const navbarNav =document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
const hamaburger=document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamaburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})
