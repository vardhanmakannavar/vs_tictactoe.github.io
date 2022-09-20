import React, {useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StateMassage from "./components/StateMassage";
import { calculateWinner } from "./helpers";

import './styles/root.scss';

const NEW_GAME = [
  {board:Array(9).fill(null), isXNext: true},
];

const App = () => {

  const [history, setHistory] = useState(NEW_GAME);
  
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  console.log('history',history); 
  //const [board, setBoard] = useState( Array(9).fill(null));
  //const [isXNext, setIsXNext] = useState(false);

  const {winner, winningSquares} = calculateWinner(current.board);
  
  // const massage = winner
  //   ? `winner is ${winner}`
  //   : `next player is ${current.isXNext ? 'X' : 'O'}`        this is copyed to StateMassage.jsx
  //console.log(winner);

  const handelSqureClick = (position) => {

     if(current.board[position] || winner) {
      return;                   //we donot change once click
     }
     
    setHistory(prev => {

      const last = prev[prev.length -1];


      const newBoard = last.board.map((square, pos) => {
         if (pos === position) {
            return last.isXNext ? 'X': 'O';
            //console.log('X');
         }

         return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext});
    });


    setCurrentMove( prev => prev +1 );
  };

  const moveTo = move => {
    setCurrentMove(move);
  }

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return(
  <div className="app">
      <h1><span className="text-green">TIC</span>  <span className="text-blue">TAC</span> <span className="text-gold">TOE</span></h1> 
      <StateMassage winner={winner} current={current}/> 
      <Board board={current.board} handelSqureClick= {handelSqureClick} winningSquares={winningSquares}/> 
      <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}>Start New Game</button>  
      <h2 style={{fontWeight: 'normal', color:"lightred" }}>Current game History</h2> 
      <History history= {history} moveTo= {moveTo} currentMove= {currentMove}/>
      <div className="bg-balls"/>
  </div>
)};

export default App;
