let choice = document.querySelectorAll('.move button')
let iner =  document.querySelector('.iner strong')
let loss =  document.querySelector('.loss strong')
let resultMove = document.querySelector('.resultMove')
let moveOpponent = document.querySelector('.moveOpponent')


let inerScore = 0;
let lossScore = 0;

choice.forEach(move => {
    move.addEventListener('click', () => {
        gameStart(move.id, moveMachine())
    })
})

function moveMachine() {
    let move = ['rock', 'paper', 'scissors']
    let numberRandom = Math.floor(Math.random() * 3)
    let moveRPS = move[numberRandom]
    if(moveRPS == 'rock') {
        moveOpponent.textContent = "👊"
    } else if(moveRPS == 'paper') {
        moveOpponent.textContent = "🖐️"
    }else if(moveRPS == 'scissors') {
        moveOpponent.textContent = "✌️"
    }
    return moveRPS
}

function gameStart(move, moveMachine) {
    if(move == moveMachine) {
        resultMove.textContent = 'Empate'
        resultMove.style.color = 'black'
    } else if(
        (move == "rock" && moveMachine == 'scissors') ||
        (move == 'paper' && moveMachine == 'rock') ||
        (move == 'scissors' && moveMachine == "paper")
    ) {
        inerScore++
        iner.textContent = inerScore
        resultMove.textContent = 'Vitoria'
        resultMove.style.color = 'green'
    } else {
        lossScore++
        loss.textContent = lossScore
        resultMove.textContent = 'Derrota'
        resultMove.style.color = 'red'
    }
}

