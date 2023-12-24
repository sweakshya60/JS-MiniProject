var cardsArray = [
    { name: "Ben10", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/ben10.jpeg?raw=true" },
    { name: "Dora", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/dora.jpeg?raw=true" },
    { name: "doremon", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/doremon.png?raw=true" },
    { name: "Hakemaru", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/hakemaru.jpeg?raw=true" },
    { name: "Hattori", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/hattori.jpg?raw=true" },
    { name: "Motupatlu", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/motupatlu.jpeg?raw=true" },
    { name: "Niyander", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/niyander.jpeg?raw=true" },
    { name: "Perman", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/perman.jpeg?raw=true" },
    { name: "RollNo21", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/rollno21.png?raw=true" },
    { name: "Ryukendo", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/rukendo.jpeg?raw=true" },
    { name: "Shinchan", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/shinchan.jpg?raw=true" },
    { name: "Spongebob", img: "https://github.com/sweakshya60/JS-MiniProject/blob/master/js_dom_matching_game/images/spongebob.jpeg?raw=true" },
]

var gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(function () {
    return 0.5 - Math.random();
})
var game = document.getElementById("game-board");
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid)

for (var i = 0; i < gameGrid.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = gameGrid[i].name;

    var front = document.createElement('div');
    front.classList.add('front');

    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;
    back.style.backgroundSize = 'cover'; 
    back.style.backgroundRepeat = 'no-repeat';  
    back.style.width = '150px';  
    back.style.height = '150px'; 

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

}
var firstGuess = '';
var secondGuess = '';

var count = 0;
var previousTarget = null;
var delay = 1200;

var match = function () {
    var selected = document.querySelectorAll('.selected');
    for (var i = 0; i < selected.length; i++) {
        selected[i].classList.add('match');
    }
};

//reset guesses after two attempts
var resetGuesses = function(){
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    for (i = 0; i < selected.length; i++){
        selected[i].classList.remove('selected');
    }
};
//addevent listener
grid.addEventListener('click', function (event) {
    var clicked = event.target;
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) {
        return;
    }
    if (count < 2) {
        count++;

        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        else {
            secondGuess = clicked.parentNode.dataset.name;
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
