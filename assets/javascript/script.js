/* jshint esversion: 8 */

/** function for the modal box */

const open_y = document.getElementById('open');
const modal_container = document.getElementsByClassName('modal_container')[0];
const close_y = document.getElementById('close');

open_y.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close_y.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

/**logic for the whole game inside this function */
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    /**Function to alocate the available moves */
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const lizzardBtn = document.querySelector('.lizzard');
        const spockBtn = document.querySelector('.spock');
        const playerOptions = [rockBtn, paperBtn, scissorBtn, lizzardBtn, spockBtn];
        const computerOptions = ['fas fa-hand-rock', 'fas fa-hand-paper', 'fas fa-hand-scissors', 'fas fa-hand-lizard', 'fas fa-hand-spock'];


        /**Function to start playing game */
        playerOptions.forEach(option => {

            option.addEventListener('click', function (ev) {

                // function to update the player's move pannel
                document.getElementById("player_choice_icon").className = ev.currentTarget.children[0].className;
                //function to keep track of the moves left
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;

                //function to randomize the computer's choices
                const choiceNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[choiceNumber];

                //function to display computer's choice

                document.getElementById("computer_choice_icon").className = computerChoice;


                /**Function to check who wins */
                winner(this.firstElementChild.className, computerChoice);

                /**Calling gameOver function after 10 moves*/
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            });
        });
    };

    /**Function to decide winner */
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Tie';
        } else if (player === 'fas fa-hand-rock') {
            if (computer === 'fas fa-hand-paper' || computer === 'fas fa-hand-spock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player === 'fas fa-hand-scissors') {
            if (computer === 'fas fa-hand-rock' || computer === 'fas fa-hand-spock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player === 'fas fa-hand-paper') {
            if (computer === 'fas fa-hand-scissors' || computer === 'fas fa-hand-lizard') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player === 'fas fa-hand-lizard') {
            if (computer === 'fas fa-hand-scissors' || computer === 'fas fa-hand-rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player === 'fas fa-hand-spock') {
            if (computer === 'fas fa-hand-lizard' || computer === 'fas fa-hand-paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    };

    /**Function to run when game is over*/
    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });


        chooseMove.innerText = 'Game Over!!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game !';
            result.style.color = '#308D46';
        } else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game :(';
            result.style.color = 'rgb(241 203 227)';
        } else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = '#aaf7b4';
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        });
    };

    /** Calling playGame function inside game */
    playGame();

};

/** Calling the game function*/
game();