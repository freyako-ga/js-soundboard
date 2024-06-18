

// const sounds = ['after', 'better', 'do_it', 'ever', 'faster']

// sounds.forEach(sound => {
// const buttons = document.querySelector('button')
// buttons.classList.add('buttons')

// buttons.innerText = sound

// document.getElementById('buttons')
// })

const audio = document.querySelector('#audio')
const button = document.querySelector('button')

function playAudio(evt){
    audio.src = './sounds/after.wav'
    audio.volume = 0.1
    audio.play()
}


button.addEventListener('click, playAudio')