import React, { useState } from 'react';
import './App.scss';

function App() {

  const [state, setState] = useState ({
    turn: 'X',
  })

  console.log(state.turn)
  const clicked = e => {

    if(e.target.innerText === ''){
      e.target.innerText = state.turn; //Set's content inside of target to what's on state
  
      setState({
        ...state, 
        turn: state.turn === 'X' ? 'O' : 'X'
      })
    }

  }

  return (
    <div id="game">
      <div id="board" onClick={(e) => clicked(e)}>
        <div className="squares" id='square0'></div>
        <div className="squares" id='square1'></div>
        <div className="squares" id='square2'></div>
        <div className="squares" id='square3'></div>
        <div className="squares" id='square4'></div>
        <div className="squares" id='square5'></div>
        <div className="squares" id='square6'></div>
        <div className="squares" id='square7'></div>
        <div className="squares" id='square8'></div>
      </div>
    </div>
  );
}

export default App;
