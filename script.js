const textElm = document.querySelector('.phrase')


const phrases = [
    'Hello World',
    'Good Morning',
    'Good Afternoon',
    'Good Evening',
    'Good Night',
    'Have a great day'
]

function randomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)]
}

setInterval(() => {
    textElm.textContent = randomPhrase().toLocaleUpperCase()
}, 1000)