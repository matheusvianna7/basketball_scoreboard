let scoreHome = document.getElementById("score-home")
let scoreCountHome = 0

function addHome(num){
    if (num == 1){
        scoreCountHome += 1
    } else if(num == 2) {
        scoreCountHome += 2
    } else if(num == 3){
        scoreCountHome += 3
    }
    scoreHome.textContent = scoreCountHome
}

let scoreGuest = document.getElementById("score-guest")
let scoreCountGuest = 0

function addGuest(num){
    if (num == 1){
        scoreCountGuest += 1
    } else if(num == 2) {
        scoreCountGuest += 2
    } else if(num == 3){
        scoreCountGuest += 3
    }
    scoreGuest.textContent = scoreCountGuest
}

function newGame(){
    scoreCountHome = 0
    scoreCountGuest = 0
    scoreHome.textContent = scoreCountHome
    scoreGuest.textContent = scoreCountGuest
}
