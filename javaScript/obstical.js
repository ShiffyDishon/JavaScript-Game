let ballb;
//===============================================
//Create new obstical.
//====================
function createNewObject() {
    posObstial = 0;
    // clearInterval(idObstial);
    clearInterval(ballb);
    countObstical++;
    if (countObstical < 20) {
        speedAbstical += 0.2;
    }
    // speedAbstical += 0.2;
    ballb = setInterval(obsticalMoving, speed);
}
//===============================================

let speedAbstical = 1;

//===============================================
//Obstical moving;
//================
function obsticalMoving() {
    //check if gameOver;
    if (posObstial > 440 && posObstial < 480 && posPerson <= 250 && posPerson > 210) {
        gameOver(text);
        return;
    }
    else if (posObstial > 440 && posObstial < 480 && posPerson <= 40 && posPerson > -10) {
        gameOver(text);
        return;
    }
    if (posObstial >= 560) {
        // clearInterval(idObstial);
        count++;
        obstial.style.visibility = 'hidden';
        obstial.style.right = 0 + 'px';
        obstial.style.visibility = 'visible';
        //to add another obstical 
        createNewObject();
    }
    else {
        posObstial += speedAbstical;
        obstial.style.right = posObstial + 'px';
    }
}

posPerson = 25;
let speedPosPerson = 1;
let speedPosPersonDown = 0.8;
