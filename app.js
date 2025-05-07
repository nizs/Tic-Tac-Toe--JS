let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let turn = document.querySelector('.turn');
let msg = document.querySelector('.msg');

let turnx = true;  // for player X and player 0
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log('box has been clicked');
        if (turnx) {
            turn.innerHTML = 'Turn : player-2'
            box.innerHTML = 'X';
            turnx = false;
        }
        else {
            turn.innerHTML = 'Turn : player-1'
            box.innerHTML = '0';
            turnx = true;
        }
        box.disabled = 'true';

        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
})
const shoWinner = winner => {
    // console.log(typeof winner);
    msg.innerText = `Winner : Congratulations Player ${winner} won !!!`
    disableBoxes();
}

const gameDraw = () => {
    msg.innerText = `Game was a Draw!!!`;
    // disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}
const resetGame = () => {
    turnx = true;
    count = 0;
    enableBoxes();
    turn.innerHTML = 'Turn : player-1';
    msg.innerText = 'Winner : ?';
}

const checkWinner = () => {
    for (pattern of winPatterns) {

        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log('winner', pos1Val)
                shoWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener('click', resetGame)



// process of Tic-Tac-Toe

//  * first we've accesed our neccesary elements with js query selector

// * created our winPatterns

// * created foEach loop on boxes and add an clickable eventListener on individual boxes.

// * created a variable for the turn of player and set a condition for one after another another disabled the boxes after one click

// * To check winner of the game we've created a function called checkWinner() and inside the function we've created loop on winPatterns and have our value after clicking on individual button

// * we've created a showwinner function to show the winner

// * Finally we've reseted the game with a function called restGame and made the game as new as it was

// * we've added a gameDraw function and added a count variable and as it is get clicked till 9 we've added logic inside our forEach and get our result 
