const hamburgerToggle = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.nav-menu')


hamburgerToggle.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('nav-menu-toggle')    
})

