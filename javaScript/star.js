// var idtree = null;
function createNewStar() {
    let treeImg = document.createElement('img');
    treeImg.setAttribute('id', 'imgTree');
    tree.appendChild(treeImg);
    StarNewPos();
}
//===============================================
//Create new tree.
//====================
let tr;
function StarNewPos() {
    posTree = 0;
    flagStars = 0;
    // clearInterval(idtree);
    clearInterval(tr);
    // speedAbstical += 0.2;
    tr = setInterval(StarMovingAction, 9);
}


//===============================================
//Create new trees.
//====================
function setStarMovingAction() {
    ballb = setInterval(StarMovingAction, speed);
}
//===============================================


//===============================================
let flagStars = 0;
function StarMovingAction() {
    if (posTree >= 570) {
        // clearInterval(idtree);
        tree.style.visibility = 'hidden';
        tree.style.right = 0 + 'px';
        tree.style.visibility = 'visible';
        // to add another obstical 
        createNewStar();
    }
    else if (posTree >= 400 && posTree <= 480 && posPerson <= -100 && posPerson > -60) {
    }
    else if (posTree > 440 && posTree < 480 && posPerson <= 0 && posPerson > -100) {
        addStar();
    }
    else {
        posTree += 10;
        tree.style.right = posTree + 'px';
    }
}
//==========================================================================


//==========================================================================
//Add star
//========
function addStar() {
    // scores.style.visibility = 'visible';
    if (flagStars == 0) {
        countStarts++;
        let countStartsCollect = document.getElementById('counterStars');
        let imgTree = document.getElementById('imgTree');
        imgTree.style.visibility = "hidden";
        countStartsCollect.innerText = countStarts;
        flagStars = 1;
        starMp3();
    }
}