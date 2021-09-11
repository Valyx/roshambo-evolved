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
    }

    /**Function to start playing game */
    playerOptions.forEach(option => {
        option.addEventListener('click', function () {

            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `Moves Left: ${10-moves}`;


            const choiceNumber = Math.floor(Math.random() * 5);
            const computerChoice = computerOptions[choiceNumber];

            /**Function to check who wins */
            winner(this.firstElementChild.className, computerChoice);

            /**Calling gameOver function after 10 moves*/
            if (moves == 10) {
                gameOver(playerOptions, movesLeft);
            }
        })
    })


}