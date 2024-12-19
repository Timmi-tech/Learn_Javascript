const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loss: 0,
    tie: 0,
}

updateScore();


document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    })

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    })
document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    })

document.body.addEventListener('keydown', () => {
    if (event.key === 'r') {
        playGame('rock')
    } else if (event.key === 'p') {
        playGame('paper')
    } else if (event.key === 'scissors') {
        playGame('scissors')
    }
})

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'you lose';
        } else if (computerMove === 'paper') {
            result = 'you win';
        } else if (computerMove === 'scissors') {
            result = 'tie';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'you win';
        } else if (computerMove === 'paper') {
            result = 'tie';
        } else if (computerMove === 'scissors') {
            result = 'you lose';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'you lose';
        } else if (computerMove === 'scissors') {
            result = 'you win';
        }
    }

    if (result === 'you win') {
        score.wins += 1
    } else if (result === 'you lose') {
        score.loss += 1
    } else if (result === 'tie') {
        score.ties += 1
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
}


function updateScore() {
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, Loses: ${score.loss}, ties: ${score.ties},`;

}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = ('rock');
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = ('paper')
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = ('scissors')
    }

    return computerMove;
}

let isAutoPlay = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlay) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        isAutoPlay = true;
        document.querySelector('.js-change-auto').innerHTML = 'Auto Play'
    } else {
        clearInterval(intervalId);
        isAutoPlay = false;
        document.querySelector('.js-change-auto').innerHTML = 'stop playing '
    }
}

document.body.addEventListener('keydown', () => {
    if (event.key === 'a') {
        autoPlay();
    }
})

const autoPlayButton = document.querySelector('.js-auto-button')
autoPlayButton.addEventListener('click', () => {
    autoPlay();
})

function resetScore() {
    score.wins = 0;
    score.loss = 0;
    score.ties = 0;

    localStorage.removeItem('score')
    updateScore();
}
const auotResetScore = document.querySelector('.js-auto-reset')
auotResetScore.addEventListener('click', () => {
    confirmationMessage()
})
document.body.addEventListener('keydown', () => {
    if (event.key === ' ') {
        confirmationMessage()
    }
})

function confirmationMessage() {
    document.querySelector('.js-confirmation-message')
        .innerHTML = `
    Are you sure you want to reset the score 
    <button class = "js-confirm-yes reset-confirm-button" > Yes</button>
     <button class = "js-confirm-no" > No</button>  `

    const confirmYesElement = document.querySelector('.js-confirm-yes')
    console.log(confirmYesElement)
    confirmYesElement.addEventListener('click', () => {
        resetScore();
        helperConfirmationMessage();
    })

    const confirmNoElement = document.querySelector('.js-confirm-no')
    console.log(confirmNoElement)
    confirmNoElement.addEventListener('click', () => {
        helperConfirmationMessage()
    })
}



function helperConfirmationMessage() {
    document.querySelector('.js-confirmation-message').innerHTML = '';
}