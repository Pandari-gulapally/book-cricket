import React from 'react'
import { useNavigate } from 'react-router-dom'

function Players({setPlayer1, setPlayer2, setOvers}) {

  const navigate = useNavigate();

  const navigateToPlay = (e) => {

    e.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const overs = document.getElementsByName('noOfOvers')[0].value;

    if(!player1 || !player2) {
      alert('Enter valid player names');
      return;
    } else {
      setPlayer1(player1)
      setPlayer2(player2)
      setOvers(overs)
      navigate('/playBoard');
    }
  }

  return (
    <div className='home-page'>
      <form className="players-name">
        <h2 className='enter-player'>Enter Players' Name</h2>
        <input
            id = 'player1'
            className='player1-input'
            type='text'
            placeholder='player 1'
        ></input>
        <input
            id = 'player2'
            className='player2-input'
            type='text'
            placeholder='player 2'
        ></input>
        <h2 className="select-overs"> Select Overs </h2>
        <select name="noOfOvers" id="oversNumber" className="overs">
          <option value="1"> super over </option>
          <option value="2"> 2 overs</option>
          <option value="3"> 3 overs</option>
          <option value="4"> 4 overs</option>
          <option value="5"> 5 overs</option>
        </select>
        <button type="button" className='play-now' onClick={navigateToPlay}>Enter Ground</button>
      </form>
    </div>
  )
}

export default Players
