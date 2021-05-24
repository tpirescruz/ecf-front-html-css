const hamburgerToggle = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.nav-menu')
const input = document.querySelectorAll('input')
const textArea = document.querySelector('textarea')
const sendButton = document.querySelector('.submit')

hamburgerToggle.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('nav-menu-toggle')    
})

sendButton.addEventListener('click', ()=> {
    for (const i of input) {
        if (i.value.length == 0 ) {
            i.classList.add('required-field')
        }
    }
    if (textArea.value.length == 0) {
        textArea.classList.add('required-field')
    }
})

