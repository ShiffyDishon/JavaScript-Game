//============================================================================
//Creates charaecto.r.
//===================
let person1 = document.getElementById('person');
let personImg = document.createElement('img');
personImg.setAttribute('id', 'person');
person1.appendChild(personImg);

function ball() {
    personImg.src = "../pictures/ball.gif";
}

function mario() {
    personImg.src = "../pictures/marioRuning.gif";
}

function sonic() {
    personImg.src = "../pictures/sonic.gif";
    personImg.style.top = '33px';
}
function dog() {
    personImg.src = "../pictures/tenor.gif";
}
//============================================================================

