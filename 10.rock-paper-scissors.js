
    let score = JSON.parse(localStorage.getItem
    ('score'))||{
        wins :0,
        losses:0,
        ties:0
      }
      updateScoreElement();

   /*  if(!score){
      score = {
        wins :0,
        losses:0,
        ties:0
      }
    }; */

    console.log(score);


    function playGame(playerMove){
      const computerMOve = pickComputermove();
      let result='';
      if(playerMove==='scissors'){

        if(computerMOve==='paper'){
            result = 'you win'
          }else if (computerMOve==='scissors'){
            result = 'tie'
        }else if(computerMOve==='rock'){
            result = 'you lose'
        }

      }else if(playerMove==='paper'){

          if(computerMOve==='paper'){
              result = 'tie'
          }else if (computerMOve==='scissors'){
              result = 'you lose'
          }else if(computerMOve==='rock'){
              result = 'you win'
          }

      }else if(playerMove==='rock'){
          if(computerMOve==='rock'){
            result = 'tie'
          }else if (computerMOve==='paper'){
            result = 'you lose'
          }else if(computerMOve==='scissors'){
            result = 'you win'
          }
        }
        if(result==='you win'){
          score.wins+=1;
        }else if(result==='you lose'){
          score.losses+=1;
        }else if(result==='tie'){
          score.ties+=1;
        }

        localStorage.setItem( 'score' , JSON.stringify(score) );

        updateScoreElement();

        document.querySelector('.js-result').
        innerHTML = result ;

        document.querySelector('.js-moves').
        innerHTML = `You
      <img src="10.images/${playerMove}-emoji.png" alt="" class="move-icon">
      <img src="10.images/${computerMOve}-emoji.png" alt="" class="move-icon">
      computer`;
    
     // alert(`you picked ${playerMove}. Computer picked ${computerMOve}. ${result}
     // Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`)
      } 
 
    function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

    }

    function pickComputermove(){

    const randomNumber = Math.random();

    let computerMOve = ' ';

    if ( randomNumber >= 0 && randomNumber < 1/3  ){
        computerMOve='rock';
    } else if( randomNumber >=1/3 && randomNumber <2/3 ){
        computerMOve='paper';
    } else if( randomNumber >=2/3 && randomNumber<1 ){
        computerMOve='scissors';
    }    
        return computerMOve;
      }
