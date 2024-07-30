document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gamesNav').addEventListener('click', function() {
        window.location = 'games.html';
    });
    document.getElementById('newsNav').addEventListener('click', function() {
        window.location = 'news.html';
    });
    document.getElementById('infoNav').addEventListener('click', function() {
        window.location = 'info.html';
    });
    document.getElementById('homeNav').addEventListener('click', function() {
        window.location = 'index.html';
    })
});
currentIndex = 0;

// sig player button, header, image and bio
let sigPlayerButtonRight = document.getElementById('nextPlayer')
let playerNameArray = [
    "LUKA DONCIC",
    "JAYLEN BROWN",
    "ANTHONY EDWARDS"
]
let playerImageArray = [
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254",
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254",
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4594268.png&w=350&h=254"
]
let playerStatsArray = [
    "https://05fdd6c1-faf5-485a-8c92-735148fdc7f8-00-3n5sfywmracaw.spock.replit.dev/images/stats/luka%20stats.png",
    "Images/playerStats/JBSTATS.png",
    "Images/playerStats/AESTATS.png"
]
let playerPositionArray = [
    "PG, SG",
    "PG, SF",
    "PG, SF, PF"
]
let teamLogoArray = [
    "https://05fdd6c1-faf5-485a-8c92-735148fdc7f8-00-3n5sfywmracaw.spock.replit.dev/images/team%20logos/mav%20logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCX1lht9mOcDqiNI8Tg1IkkJnG_LnIxsc2w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFmEmlNeGJ_CJnnR8s8PoBZkUICzssps-jw&s"
]

let playerNameElement = document.getElementById('playerName')
let playerImageElement = document.getElementById('playerImage')
let playerStatsElement = document.getElementById('stats')
let playerPositionElement = document.getElementById('player_pos')
let teamLogoElement = document.getElementById('team_logo')

function changePlayer(button, title, image, position, stats, teamLogo, titleE, imageE, positionE, statsE, teamLogoE) {
    button.addEventListener('click', function() {
        currentIndex += 1
        if (currentIndex >= title.length) {
            currentIndex = 0
        }
        titleE.innerHTML = `<h1>${title[currentIndex]}<h1>`
        imageE.src = image[currentIndex]
        positionE.innerHTML = position[currentIndex]
        statsE.src = stats[currentIndex]
        teamLogoE.src = teamLogo[currentIndex]
    });
}

changePlayer(sigPlayerButtonRight, playerNameArray, playerImageArray, playerPositionArray, playerStatsArray, teamLogoArray, playerNameElement, playerImageElement, playerPositionElement, playerStatsElement, teamLogoElement);

let articleSlotOne = document.getElementById('articleOne');
let articleSlotTwo = document.getElementById('articleTwo');
let articleSlotThree = document.getElementById('articleThree');
let articleSlotFour = document.getElementById('articleFour');
let articleSlotFive = document.getElementById('articleFive');


/*
Code for the navigation bar slide away on scroll, lowkey giving me trouble

window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY
    console.log(scrollPosition)
    let navBar = document.querySelector('.navBarContainer')
    let threshHoldScroll = 50
    if (scrollPosition > threshHoldScroll){
        navBar.classList.add('navBarDissapear')
    } else {
        navBar.classList.remove('navBarDissapear')
    }
});
*/