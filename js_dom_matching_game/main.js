let cardsArray = [
    { name: "Ben10", img: "" },
    { name: "Dora", img: "" },
    { name: "doremon", img: "" },
    { name: "Hakemaru", img: "" },
    { name: "Hattori", img: "" },
    { name: "Motupatlu", img: "" },
    { name: "Niyander", img: "" },
    { name: "Perman", img: "" },
    { name: "RollNo21", img: "" },
    { name: "Ryukendo", img: "" },
    { name: "Shinchan", img: "" },
    { name: "Spongebob", img: "" },
]
let gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(function () {
    return 0.5 - Math.random();
})
let game = document.getElementById("game-board");
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid)

for (let i = 0; i < gameGrid.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = gameGrid[i].name;

    let front = document.createElement('div');
    front.classList.add('front');

    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

}
let firstGuess = '';
let secondGuess = '';

let count = 0;
let previousTarget = null;
let delay = 1200;

let match = function () {
    let selected = document.querySelectorAll('.selected');
    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.add('match');
    }
};

//reset guesses after two attempts
let resetGuesses = function(){
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    let selected = document.querySelectorAll('.selected');
    for (i = 0; i < selected.length; i++){
        selected[i].classList.remove('selected');
    }
};
//addevent listener
grid.addEventListener('click', function (event) {
    let clicked = event.target;
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) {
        return;
    }
    if (count < 2) {
        count++;

        if (count === 1) {
            firstGuess == clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        else {
            secondGuess == clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if (firstGuess !== '' && secondGuess !== ''){
            if(firstGuess === secondGuess){
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
            }else{
                setTimeout(resetGuesses, delay);
            }
        }
        previousTarget = clicked;
    }
})
