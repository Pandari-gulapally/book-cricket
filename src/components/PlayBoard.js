import React, { useEffect } from 'react';
import closedBook from '../assets/closed-book.svg';
import flippingBook2 from '../assets/flipping-book.gif';
import player from '../assets/user-Icon.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PlayBoard({ player1, player2, overs }) {

  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [isBookClosed, setToFlippingBook] = useState(closedBook);

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [player1Balls, setPlayer1Balls] = useState(0);
  const [player2Balls, setPlayer2Balls] = useState(0);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [runsOnBall, setRunsOnBall] = useState('')
  const [animate, setAnimate] = useState(false);

  const [winner, setWinner] = useState('');

  const navigate = useNavigate();

  document.documentElement.style.setProperty('--dynamic-content1', `"${player1Score} (${player1Balls})"`);
  document.documentElement.style.setProperty('--dynamic-content2', `"${player2Score} (${player2Balls})"`);

  const handlePlayClick = () => {
    disableButton();
    setToFlippingBook(flippingBook2);
    setTimeout(()=>{
      setToFlippingBook(closedBook)
      setIsPlayer1Turn(prevTurn => !prevTurn);
      handleScores();
    }, 2000);


  };

  const handleScores = () => {
    const runs = Math.floor(Math.random() * 7);
    setRunsOnBall(runs)
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1500);
    updateDynamicContent(runs);
  };

  const updateDynamicContent = (value) => {
    if(isPlayer1Turn) {
      setPlayer1Balls(prev => prev + 1);
      setPlayer1Score(prev => prev + value);
    } else {
      setPlayer2Balls(prev => prev + 1);
      setPlayer2Score(prev => prev + value);
    }
  };

  const disableButton = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3550);
  };

  useEffect( () => {
    console.log("useEffect trigered")
    if(player2Balls === (overs*6)){
      let result;
      console.log('player1 score',player1Score);
      console.log('player2 score',player2Score);
  
      if(player1Score === player2Score){
        result = `Match Drawn`;
      } else if(player1Score > player2Score) {
        result = `${player1} won the match`;
      } else {
        result = `${player2} won the match`;
      }
      setWinner(result);
      const winner = document.getElementById('winner');
      winner.style.visibility = 'visible';
      setTimeout(()=>navigate('/players'), 4500) 
    }
  },[player2Score]);

  return (
    <div id = 'playboard-container'>
      <div className="player-container">
        <div className="player1-icon">
          <img src={player} alt="player-icon" className="player1-img" />
        </div>
        <h2 className={`player1-name ${isPlayer1Turn ? 'batting' : ''}`} >{player1}: </h2>
        <div className="player2-icon">
          <img src={player} alt="player-icon" className="player2-img" />
        </div>
        <h2 className={`player2-name ${!isPlayer1Turn ? 'batting' : ''}`} >{player2}: </h2>
      </div>
      <div className="play-book">
        <img src={isBookClosed} alt="closed book" className='closed-book'/>
      </div>
      <button type="button" className = 'play-button' onClick={handlePlayClick} disabled={isButtonDisabled}>PLAY</button>
      <div className={`runs ${animate ? 'animate' : ''}`}>{runsOnBall}</div>
      
      <div id = 'winner'>
        <h1> {winner} </h1>
      </div>
    </div>
  )
}

export default PlayBoard
