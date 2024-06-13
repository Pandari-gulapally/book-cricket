import React from 'react';
import book from '../assets/open-book-svgrepo-com.svg'
import {useNavigate} from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  // const navigateToPlayersPage = () => {
  //   navigate('/players');
  // }

  return (
    <div className='home-page'>
      <div className="welcome-card">
        <div className="wecome-text"> Welcome to Book Cricket!! 😀😇</div>
        <img src = {book} alt="open book" className='book-gif'/>
        <button type='button' className="enter-button" onClick={()=>navigate('/players')}>Enter Player Names -{'>'}</button>
      </div>
    </div>
  )
}

export default Home
