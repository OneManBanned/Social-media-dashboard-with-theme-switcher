const body = document.querySelector('body')
const toggle = document.querySelector('#toggle')

window.addEventListener('DOMContentLoaded', theme)
toggle.addEventListener('change', toggleTheme)

function toggleTheme() {
    if (toggle.checked === true) {
        body.classList.remove("light-mode")
        body.classList.add("dark-mode")
    }
    else if (toggle.checked === false) {
        body.classList.remove("dark-mode")
        body.classList.add("light-mode")
    }
}

function theme() {
    body.classList.add('light-mode')
}


