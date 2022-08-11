/* variables for game state */
let player1score = 0;
let player2score = 0;
let player1turn =  true;

/* connecting DOM nodes */

let playerTurn = document.getElementById("turn");
let player1Scoreboard = document.getElementById("player1-score");
let player1Dice = document.getElementById("player1-dice");
let player2Scoreboard = document.getElementById("player2-score");
let player2Dice = document.getElementById("player2-dice");
let rollBtn = document.getElementById("roll-btn");
let resetBtn = document.getElementById("reset-btn");
let showModal = document.getElementById("overlay");
let modalMsg = document.getElementById("modal-msg");

/* event listner to roll up the dice game */
rollBtn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
   
    if(player1turn) {
        player1score += randomNumber;
        player1Scoreboard.textContent = player1score;
        player1Dice.innerHTML = `<img src="./images/dice${randomNumber}.PNG" alt="" />`;
        player1Dice.classList.remove("active-dice");
        player2Dice.classList.add("active-dice");
        playerTurn.textContent = "Player 2 turn";
    } 
    else {
        player2score += randomNumber;
        player2Scoreboard.textContent = player2score;
        player2Dice.innerHTML = `<img src="./images/dice${randomNumber}.PNG" alt="" />`;
        player2Dice.classList.remove("active-dice");
        player1Dice.classList.add("active-dice");
        playerTurn.textContent = "Player 1 turn";
    }

    /* checking winner */
    if (player1score >= 20){
        showModal.classList.add("active");
        modalMsg.textContent = "Player 1 won! 🥳"
    }
    else if (player2score >= 20) {
        showModal.classList.add("active");
        modalMsg.textContent = "Player 2 won! 🎉";
    }
    
    player1turn = !player1turn;
})

/* reset button for closing modal and restarting game */
resetBtn.addEventListener("click", () => {
    showModal.classList.remove("active");
    player1score = 0;
    player2score = 0;
    player1turn = true;

    player1Scoreboard.textContent = player1score;
    player2Scoreboard.textContent = player1score;
    player2Dice.classList.remove("active-dice");
    player1Dice.classList.add("active-dice");
    playerTurn.textContent = "Player 1 turn"
    
})