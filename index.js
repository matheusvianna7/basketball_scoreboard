let scoreHome = document.getElementById("score-home")
let scoreCountHome = 0
let scoreGuest = document.getElementById("score-guest")
let scoreCountGuest = 0

function addHome(num){
    if (num == 1){
        scoreCountHome += 1
    } else if(num == 2) {
        scoreCountHome += 2
    } else if(num == 3){
        scoreCountHome += 3
    }
    scoreHome.textContent = scoreCountHome
    if(scoreCountHome > scoreCountGuest){
        document.getElementById("score-home").style.border = "2px solid #ADA89Dff"
        document.getElementById("score-guest").style.border = "none"
    } else if(scoreCountHome === scoreCountGuest){
        document.getElementById("score-home").style.border = "none"
        document.getElementById("score-guest").style.border = "none"
    }
}

function addGuest(num){
    if (num == 1){
        scoreCountGuest += 1
    } else if(num == 2) {
        scoreCountGuest += 2
    } else if(num == 3){
        scoreCountGuest += 3
    }
    scoreGuest.textContent = scoreCountGuest
    if(scoreCountGuest > scoreCountHome){
        document.getElementById("score-guest").style.border = "2px solid #ADA89Dff"
        document.getElementById("score-home").style.border = "none"
    } else if(scoreCountGuest === scoreCountHome){
        document.getElementById("score-guest").style.border = "none"
        document.getElementById("score-home").style.border = "none"
    }
}

function newGame(){
    scoreCountHome = 0
    scoreCountGuest = 0
    scoreHome.textContent = scoreCountHome
    scoreGuest.textContent = scoreCountGuest
    document.getElementById("score-home").style.border = "none"
    document.getElementById("score-guest").style.border = "none"
}
