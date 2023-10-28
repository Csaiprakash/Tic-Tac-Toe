import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import Circle from '../Assests/circle.png'
import Cross from '../Assests/cross.png'
let data=["","","","","","","","",""];
function TicTacToe() {
    let [count,setCount]=useState(0);
    let [lock,setLock]=useState(false);
    let titleRef=useRef(null);
    let b1=useRef(null);
    let b2=useRef(null);
    let b3=useRef(null);
    let b4=useRef(null);
    let b5=useRef(null);
    let b6=useRef(null);
    let b7=useRef(null);
    let b8=useRef(null);
    let b9=useRef(null);
    let box_array=[b1,b2,b3,b4,b5,b6,b7,b8,b9];
    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML=`<img src='${Cross}'>`;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML=`<img src='${Circle}'>`;
            data[num]="o";
            setCount(++count);
        }
        check();
    }
    const check=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==''){
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==''){
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==''){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==''){
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==''){
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==''){
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==''){
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==''){
            won(data[6]);
        }
    }
    const won=(winner)=>{
        setLock(true);
        if(winner==='x'){
            titleRef.current.innerHTML=`Congratulations : <img src=${Cross}> wins`;
        }
        else{
            titleRef.current.innerHTML=`Congratulations : <img src=${Circle}> wins`;
        }
    }
    const reset=()=>{
        setLock(false);
        data=["","","","","","","","",""];
        titleRef.current.innerHTML='Tic-Tac-Toe Game';
        box_array.map((e)=>{
            e.current.innerHTML = "";
            return null;
        });
    }
  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic-Tac-Toe Game</h1>
        <div className='board'>
            <div className='row1'>
                <div className='box' ref={b1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className='box' ref={b2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className='box' ref={b3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className='row2'>
                <div className='box' ref={b4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className='box' ref={b5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className='box' ref={b6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className='row3'>
                <div className='box' ref={b7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className='box' ref={b8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className='box' ref={b9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset' onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe