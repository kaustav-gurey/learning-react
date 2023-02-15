let cards = []
let sum = 0

let cardsEl = document.querySelector("#cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let message = "error"

let player = {
    name: "Kev",
    chips: 145
}

let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + " $" + player.chips

function getRandomCard(){
    let num = Math.floor(Math.random()*13)+1
    if(num === 1){
        return 11
    }
    if(num > 10){
        return 10
    }
    return num
}

function printCards(){
    let showCards = ""
    for(let i = 0; i<cards.length; i++){
        showCards += cards[i] + " "
    }
    return showCards
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if(sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You got a Blackjack!"     
    }
    else{
        message = "You're out of the game!"
    }
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
    cardsEl.textContent = "Cards: " + printCards()
}

let extraCard = getRandomCard()

function newCard(){
    if(sum === 0){
        messageEl.textContent = "Start the game first."
        return
    }
    if(sum >= 21){
        messageEl.textContent = "Your game is over, start a new game if you want to play again."
        return
    }
    cards.push(extraCard)
    sum += extraCard
    renderGame()
}