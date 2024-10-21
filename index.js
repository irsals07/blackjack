// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]; 
let sum = firstCard + secondCard; 
let hasBlackjack = false;
let isAlive = true; 
let message = "";


//references to html
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");



//starter code
let message;

if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
} else if (sum > 21) {
    message = "You're out of the game! 😭";
} else {
    message = "Do you want to draw a new card? 🙂";
}
console.log(message)

function renderGame() {
    // Clear previous cards
    cardsEl.textContent = "Cards: "; 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "; 
    }

    // Calculate the sum 
    sum = 0;
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]; 
    }
    sumEl.textContent = "Sum: " + sum;

    if (hasBlackjack) {
        message = "Wohoo! You've got Blackjack! 🥳";
    } else if (!isAlive) {
        message = "You're out of the game! 😭";
    } else {
        message = "Do you want to draw a new card? 🙂";
    }
    
    messageEl.textContent = message;
}
function startGame() {
    isAlive = true; 
    sum = 0;
    cards = [getRandomCard(), getRandomCard()];
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]; 
    }
    renderGame();
}
function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1; 
}


function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard(); 
        cards.push(card); 
        renderGame();
    }
}

function startGame() {
    isAlive = true; 
    sum = 0;
    cards = [getRandomCard(), getRandomCard()];
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]; 
    }
    renderGame();
}
function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1; 
}

renderGame()

