let scoreHome = document.getElementById("score-home")
let scoreCountHome = 0

function add1home(){
    scoreCountHome += 1
    scoreHome.textContent = scoreCountHome
}

function add2home(){
    scoreCountHome += 2
    scoreHome.textContent = scoreCountHome
}

function add3home(){
    scoreCountHome += 3
    scoreHome.textContent = scoreCountHome
}

let scoreGuest = document.getElementById("score-guest")
let scoreCountGuest = 0

function add1guest(){
    scoreCountGuest += 1
    scoreGuest.textContent = scoreCountGuest
}

function add2guest(){
    scoreCountGuest += 2
    scoreGuest.textContent = scoreCountGuest
}

function add3guest(){
    scoreCountGuest += 3
    scoreGuest.textContent = scoreCountGuest
}

function newGame(){
    scoreCountHome = 0
    scoreCountGuest = 0
    scoreHome.textContent = scoreCountHome
    scoreGuest.textContent = scoreCountGuest
}