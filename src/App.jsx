import { useRef, useState, useMemo, useCallback } from 'react'
import { useEffect } from 'react';
import './App.css';
import Header from './compnents/Header';
import ComponentOne from './compnents/ComponentOne';
import ComponentTwo from './compnents/ComponentTwo';

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

//useMemo
const [number, setNumber]=useState(0);
const [numCounter, setNumCounter]=useState(0);
function cubeNum(num){
  console.log("Calculation done");
  return (Math.pow(num, 3))
}
const result = useMemo(()=>cubeNum(number), [number]);

//useCallback
const [i,setI]=useState(0);
const newFunction = useCallback(()=>{},[])

//useContext
//See components

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
    <div className='grid-item'>
    <h3>useMemo</h3>
    <input onChange={(e)=>setNumber(e.target.value)} type='number' value={number}/>
    <p>Cube of the number: {result}</p>
    <button onClick={()=>setNumCounter(numCounter+1)}>Counter++</button>
    <p>Counter: {numCounter}</p>
    </div>
    <div className='grid-item'>
    <h3>useCallback</h3>
    <Header newFn={newFunction}/>
    <p>{i}</p>
    <button onClick={()=>setI(i+1)}>Click Here</button>
    </div>
    <div className='grid-item'>
    <h3>useContext</h3>
    <ComponentOne />
    <ComponentTwo />
    </div>
    </div>
  )
}

export default App
