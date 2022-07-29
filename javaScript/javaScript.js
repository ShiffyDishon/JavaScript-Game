//=================================================================
//game
//=================================================================
let jump = document.addEventListener("keydown", callJumpActionByEvent);
// var idObstial = null;
var idPerson = null;
let speed = 7;
let count = 0;
let countStarts = 0;
let text = 'game over';
let obstial = document.getElementById("imgObstial");
let person = document.getElementById("person");
let tree = document.getElementById("imgTree");
let countObstical = 0;

let posPerson = 25;
let posObstial = 0;
let posTree = 0;
let speedScore = 100;
let startGameBtn = document.getElementById('startGame');

let speedObstical = 1;

function createBoard() {
    // gameOverMp3();
    mario();
}

//===============================================
//Start Game.
//===========
function startGame() {
    startGamePlayAudio()
    startGameBtn.style.visibility = 'hidden';
    let time = setInterval(countScore, speedScore);
    createNewObject();
    createNewStar();
}
//===============================================


//===============================================
//backgound sound!!
//==================
function startGamePlayAudio() {
    let audio = document.getElementById("Audio");
    audio.src = "../mp4/backgroundMp4.mp3";
    audio.play();
}
//===============================================


//========================================================
//Game Over. Shows game over text....
//===================================
function gameOver(text) {
    countUp = 0;
    speedPosPersonDown = 20;

    //    setTimeout(satrtGameAgain, 1300)
    gameOverMp3()

    let overGame = document.getElementById('game_over');
    overGame.innerText = text;
    overGame.style.position = 'fixed';
    overGame.style.textAlign = 'center';
    overGame.style.fontSize = '5vw';
    overGame.style.marginLeft = '11%';
    overGame.style.marginTop = '9.5%';
    overGame.style.zIndex = '50';
    overGame.style.transform = 'rotateX(0.9)';
    overGame.style.transition = '1s';
    overGame.style.textShadow = "3px 0 white";
    overGame.style.fontWeight = 'bold';
    speedPosPersonDown = 0.8;
    overGame.style.position = 'visibility';
    setTimeout(satrtGameAgain, 1300)
    clearGame();
    return;
}
//================================================================

//================================================================
//sound game over.
//================
function gameOverMp3() {
    let audio = document.getElementById("Audio");
    audio.pause();
    audio.currentTime = 0;
    let gameOverMusic = document.getElementById("gameOverMusic");
    gameOverMusic.src = "../mp4/gameover.wav";
    gameOverMusic.play();
}
//===============================================================

function satrtGameAgain() {
    location.reload();
}


let counting = 0;
let countUp = 1;
//========================================================
//Counts the score.
//=================
function countScore() {
    scores.style.visibility = 'visible';
    counting += countUp;
    let score = document.getElementById('scores');
    scores.innerText = 'score: ' + counting;
}
//========================================================

//========================================================
function clearGame() {
    speedPosPerson = 0.5;
    // clearInterval(idObstial)
    clearInterval(countScore);
    time = null;
    counting = 0;
    // setInterval(countScore, speedScore);
    let overGame = document.getElementById('game_over');
    overGame.style.visibility = 'hidden';
    createBoard();
}
//========================================================



//==========================================================================
//==========================================================================
function starMp3() {
    let audio = document.getElementById("starMp");
    audio.pause();
    audio.currentTime = 0;
    let starAudio = document.getElementById("gameOverMusic");
    starAudio.src = "../mp4/star.WAV";
    starAudio.play();
}
//==========================================================================
