import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './components/Home'
import Players from './components/Players';
import PlayBoard from './components/PlayBoard';

function App() {

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [overs, setOvers] = useState('');


  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h2 className = "headerName"> Book Cricket </h2>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Players setPlayer1 = {setPlayer1} setPlayer2={setPlayer2} setOvers = {setOvers}/>} />
          <Route path='/playBoard' element={<PlayBoard player1={player1} player2={player2} overs={overs}/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
