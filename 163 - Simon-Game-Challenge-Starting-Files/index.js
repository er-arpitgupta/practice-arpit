var level = 1
var gameStarted = false
var choice = ['green', 'red', 'yellow', 'blue']
var systemColorList = []
var userColorList = []
userClick = 0

function generateColors() {
    systemColorList = []
    for (let i = 0; i < level; i++) {
        systemColorList.push(choice[Math.floor(Math.random() * 4)])
    }
}
function compareLists(list1, list2) {
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) return false;
    }
    return true;
}

function animateButton(color) {
    new Audio('./sounds/' + color + '.mp3').play()
    $('.' + color).fadeOut(200).fadeIn(200)
}

document.addEventListener('keypress', function (event) {
    if (!gameStarted && (event.key === 'a' || event.key === 'A')) {
        gameStarted = true
        $('h1').text('Level ' + level)
        generateColors()
        animateButton(systemColorList[0])
    }
});

$('.btn').click(function () {
    if (gameStarted) {
        userColorList.push($(this).attr('id'))
        animateButton($(this).attr('id'))
        userClick += 1
    }
});

function nextLevel() {
    gameStarted = true
    userColorList = []
    level += 1
    $('h1').text('Level ' + level)
    generateColors()
    console.log(systemColorList);
    for (let i = 0; i < systemColorList.length; i++) {
        animateButton(systemColorList[i])
    }
}

$(document).click(function () {
    if (userClick === level) {
        gameStarted = false
        userClick = 0
        if (compareLists(systemColorList, userColorList)) nextLevel()
        else {
            level = 1
            userColorList = []
            animateButton('wrong')
            $('h1').text('Game Over').css('color', 'red')
            setTimeout(() => {
                $('h1').text('Press A Key to Start').css('color', '#ad8c00')
            }, 1000);
        }
    }
})