let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses: 0,
  ties :0,
}

updateScoreElement();
/*

if (!score) {
  score = {
    wins : 0,
    losses: 0,
    ties :0,
  };
}
  */




  
  function playGame(playerMove) {

    const computerMove = pickcomputerMove();

    let result = '';

     if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'you lose';
      } else if (computerMove === 'paper') {
        result = 'you win';
      } else if (computerMove === 'sciccors') {
        result = 'tie';
      }


    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
        result = 'tie';
      } else if (computerMove === 'paper') {
        result = 'you lose';
      } else if (computerMove === 'sciccors') {
        result = 'you win';
      }

      
    }else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
        result = 'you win';
      } else if (computerMove === 'paper') {
        result = 'tie';
      } else if (computerMove === 'sciccors') {
        result = 'you lose';
      }
    }

    if (result === 'you win') {
      score.wins += 1;
    }else if (result === 'you lose') {
      score.losses += 1;
    }else if (result === 'tie') {
      score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
    .innerHTML = ` you
        <img class="images" src="images/${playerMove}-emoji.png" alt="">
        <img class="images" src="images/${computerMove}-emoji.png" alt="">
        computer` ;

  }

  function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}` ;
  };


      function pickcomputerMove() {
      const randomNumber = (Math.random());

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock';
      }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'paper';
      }else if (randomNumber >= 2/3 && randomNumber < 1)  {
      computerMove = 'sciccors';
      }

      console.log(computerMove);

      return computerMove;

    }
