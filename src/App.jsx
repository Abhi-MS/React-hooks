import { useRef, useState } from 'react'
import { useEffect } from 'react';
import './App.css';

function App() {
  //useState
  const [count,  setCounter]=useState(0);
  const [favColour, setFavColour]=useState({
    colour: "Red",
    buttonColour:"Blue",
    whatIs: "Roses are"
  });
  function changeColour(event){
    if (event.target.innerText=="Blue"){
      setFavColour((prev)=>{
      return{colour: "Blue", buttonColour:"Red",whatIs:"Sky is"}
    })
    }
    else{
      setFavColour((prev)=>{
        return{colour: "Red", buttonColour:"Blue",whatIs:"Roses are"}
    })
    
  }
}
function increment(){
  setCounter(prev=>prev+1)
}

//useEffect
const [renderCounter, setRenderCounter]=useState(0);
useEffect(()=>{
  setTimeout(()=>{setRenderCounter(renderCounter+1)},2000)
},[])

//useRef
const [value, setValue]=useState(0);
const valueRenderCount = useRef(0);
const valueCount=useRef(0);
useEffect(()=>{
  valueCount.current=valueCount.current+1;
})

const inputElem= useRef();
function btnClicked(){
  console.log(inputElem.current)
  inputElem.current.style.backgroundColor="blue";
}

  return (
    <div className='grid-container'>
      <div className='grid-item'>
      <h3>useState</h3>
      <p>My favourite colour is {favColour.colour}</p>
      <p>{favColour.whatIs} {favColour.colour}</p>
      <button style={{ backgroundColor: favColour.buttonColour }} onClick={changeColour}>{favColour.buttonColour}</button>
      <div>Counter:{count}</div>
      <button onClick={increment}>Increase</button>
    </div>
    <div className='grid-item'>
    <h3>useEffect</h3>
    <p>I have rendered {renderCounter} times</p>
    </div>
    <div className='grid-item'>
    <h3>useRef</h3>
    <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
    <p>{value}</p>
    <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
    <p>I have rendered {valueCount.current} times</p>
    <input type='text' ref={inputElem}></input>
    <button onClick={btnClicked}>Click Here</button>
    </div>
    <div className='grid-item'></div>
    </div>
  )
}

export default App
