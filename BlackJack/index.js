cards=[]
let sum=0
let isAlive=true
let hasBlackJack=false

let sumEl=document.getElementById("sum-el")
let messageEl= document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")

let player={
    playerName:"Shivam",
    playerChips:150,
    sayHello: function(){
        return ("Hahaha")
    }
}

playerDetails=document.getElementById("player-el")
playerDetails.textContent= player.playerName+" "+player.playerChips+player.sayHello()

function getRandomCard(){
    let randomNumber= (Math.floor(Math.random() * 13) + 1)
    if(randomNumber>9){
        return 10
    }
    else if(randomNumber===1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()
    sum=firstCard+secondCard
    cards=[firstCard, secondCard]
    renderGame(0)
}

function renderGame(newCard){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i+=1){
        cardsEl.textContent+=" "+cards[i]
    }
    sumEl.textContent="Sum: "+ sum
    if(sum<21){
        message="Do you want a new Card"
    }else if(sum === 21){
        hasBlackJack=true
        message="You go BlackJack"
    }else{
        isAlive=false
        message="Bust"
    }
    messageEl.textContent= message
}

function newCardFunction(){
    if(isAlive===true  && hasBlackJack===false){
        let newCard = getRandomCard()
        sum+=newCard
        cards.push(newCard)
        renderGame(newCard)
    }
}