// JS for drumkit as a Kata attempt

//creating the event and function

// window.addEventListener('keydown', function(e) {
//     const audio = document.querySelector(`audio[data-key = '${e.code}']`) //stores the audio file based on which key is pressed
//     const key = document.querySelector(`.key[data-key = '${e.code}']`) //stores the key that was pressed
//     if (!audio) return // end fucntion immediately if a undefined key is pressed
//     key.classList.add('playing') //adds the transofrm effects to the target element
//     audio.currentTime = 0 //resets audio file to 0 if another key is presed
//     audio.play() //plays aaudio file associated with the key
// })

//Taking the above function out of the event listener so that we can call it for other events if needed
function playSound(e) {
    const audio = document.querySelector(`audio[data-key = '${e.code}']`)
    const key = document.querySelector(`.key[data-key = '${e.code}']`) 
    if (!audio) return 

    key.classList.add('playing')
    audio.currentTime = 0 
    audio.play()
}

//Now we want to remove the transition and return it to the normal style

function removeTransition(e) {
    if (e.propertyName !== 'transform') return //ends function if the key is not transformed
    this.classList.remove('playing') //'this' specifies the object we are targeting within the function. Same as coding e.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key') //stores all the key classes from our HTML
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //adding an eventListener for whatever key is pressed

// adding the event
window.addEventListener('keydown', playSound)