// let randomInt1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1; // for min other than 0
let randomInt1 = Math.floor(Math.random() * 6) + 1; // for min = 0
document.querySelector('img.img1').setAttribute('src', './images/dice' + randomInt1 + '.png');

let randomInt2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
document.querySelector('img.img2').setAttribute('src', './images/dice' + randomInt2 + '.png');

if (randomInt1 > randomInt2) {
    document.querySelector('h1').innerHTML = "⛳Player 1 Wins!";
} else if (randomInt2 > randomInt1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!⛳";
} else {
    document.querySelector('h1').innerHTML = "Draw!";
}