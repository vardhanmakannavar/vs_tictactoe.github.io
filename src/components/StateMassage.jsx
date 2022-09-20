import React from 'react'

const StateMassage = ({winner, current}) => {
//     const massage = winner
//     ? `winner is ${winner}`
//     : `next player is ${current.isXNext ? 'X' : 'O'}`

const noMoveLeft = current.board.every(el => el !==null);

    return (
    <div className='status-message'>
        {winner && (
          <>
            winner is {''}
            <span className= {winner === 'X' ? 'text-green' : 'text-gold'}>
              ${winner}
            </span>  
          </>
        )}

        {!winner &&  !noMoveLeft && (
           <> 
           Next player is {''}
             <span className={ current.isNext ? 'text-green' : 'text-gold'}>
              {current.isXNext ? 'X' : 'O'} {''}
             </span>
           </>
        )}

        {!winner && noMoveLeft && (
          <>
            <span className='text-green'>X</span> and {''}
            <span className='text-gold'>O</span> tied
          </>
        )}

      </div>
    
  
    )};
    

export default StateMassage;
