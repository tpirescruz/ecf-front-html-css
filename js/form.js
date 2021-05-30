const input = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const sendButton = document.querySelector('.submit');
const inputContainer = document.querySelectorAll('.input-container');

let warning = document.createElement('p');

warning.textContent = 'This field is required';
warning.classList.add('required');

sendButton.addEventListener('click', () => {
for (let i of input) {
    if (i.value.length == 0) {
        i.parentNode.appendChild(warning)
        i.classList.add('required-border')
    } else {
        i.classList.remove('required-border')
    };
}

if (textArea.value.length == 0) {
    textArea.parentNode.appendChild(warning)
    textArea.classList.add('required-border')
} else {
    textArea.classList.remove('required-border')
    textArea.parentNode.removeChild(warning)

}
})
