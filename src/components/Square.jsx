//rafce defalt call function will genarater

/*
import React from 'react'

const Square = ({value, children}) => {    // const Square = props => {
  return (                                 // console.log(props);
    <button>{children}</button>            // return <button>{props.value}</button>  
  )                              // };
};

export default Square  */


import React from 'react'


const Square = ({value, onClick, isWinningSquare}) => {
  return (
       <button  type= 'button' onClick = {onClick} 
         className={`square ${isWinningSquare ? 'winning' : ''} 
         ${ value === 'X' ? 'text-green' : 'text-gold'}`}>
                                                                    {/* style= {{color: isWinningSquare ? 'red' : 'black' }} */}
           {value} 
       </button>                                       // onClick={() => { }}
   )};                                                 //console.log(value);

    

export default Square


// style={{fontWeight: winningSquares ? 'bold' : 'normal'}}
