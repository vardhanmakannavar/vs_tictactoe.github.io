import React, {useState} from 'react'
import Square from './Square'

const Board = ({board, handelSqureClick, winningSquares}) => {


 {/* const [board, setBoard] = useState( Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  console.log(board);

  const handelSqureClick = (position) => {

     if( board[position]) {
      return;                   //we donot change once click
     }
     
    setBoard(prev => {
      return prev.map((square, pos) => {
         if (pos === position) {
            return isXNext ? 'X': 'O';
            //console.log('X');
         }

         return square;
      });
    });


    setIsXNext( (prev) => !prev)
  }; */}

  const renderSquare = position => {

    const isWinningSquare = winningSquares.includes(position)

   return (
   <Square 
     value={board[position]} 
     onClick = {() =>handelSqureClick(position)}
     isWinningSquare = {isWinningSquare}
   />
   )};

  return (
    <div className="board">
       
       <div className="board-row">

         { renderSquare(0) }
         { renderSquare(1) }
         { renderSquare(2) }


        {/*  <Square value={board[0]} onClick = { () => {
             handelSqureClick()
          }}/>
          <Square value={board[1]}/>
          <Square value={board[2]}/>
          {/* <Square>
            <p>vardhan</p>
            bxhshnz
          </Square> */}

       </div>
       <div className="board-row">
          { renderSquare(3)}  {/*<Square value={board[3]}/>*/}
          { renderSquare(4)}  {/*<Square value={board[4]}/>*/}
          { renderSquare(5)}  {/*<Square value={board[5]}/>*/}
       </div>
       <div className="board-row">
         { renderSquare(6)}    {/* <Square value={board[6]}/>*/}
         { renderSquare(7)}    {/* <Square value={board[7]}/>*/}
         { renderSquare(8)}    {/* <Square value={board[8]}/>*/}
       </div>

    </div>
  )
}

export default Board
