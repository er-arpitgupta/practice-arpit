var drumButtons = document.querySelectorAll('.drum');

for (let i = 0; i < drumButtons.length; i++) {
    let buttonText = drumButtons[i].innerHTML;
    drumButtons[i].addEventListener('click', function () {
        makeSound(buttonText)
        buttonAnimation(buttonText)
    });
}

document.addEventListener('keypress', function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
});

function makeSound(key) {
    switch (key) {
        case 'w':
            var w = new Audio('./sounds/tom-1.mp3').play()
            break;
        case 'a':
            var a = new Audio('./sounds/tom-2.mp3').play();
            break;
        case 's':
            var s = new Audio('./sounds/tom-3.mp3').play();
            break;
        case 'd':
            var d = new Audio('./sounds/tom-4.mp3').play();
            break;
        case 'j':
            var j = new Audio('./sounds/snare.mp3').play();
            break;
        case 'k':
            var k = new Audio('./sounds/crash.mp3').play();
            break;
        case 'l':
            var l = new Audio('./sounds/kick-bass.mp3').play();
            break;
        default: console.log(buttonText);
            break;
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector('.' + key);

    activeButton.classList.toggle('pressed')
    setTimeout(() => {
        activeButton.classList.toggle('pressed')
    }, 100);
}