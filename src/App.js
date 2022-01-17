import './App.css';
import {useEffect, useState} from 'react'
import useInterval from './useInterval';

function App() {
  const [xPosition, setXPosition] = useState(150)
  const [yPosition, setYPosition] = useState(150)
  const [dy, setDY] = useState(150)
  const [dx, setDX] = useState(150)
  const [countInterval, setCountInterval] = useState(0)
  const [count1, setCount1] = useState(0)
  
  
  useEffect(()=>{
    const tick = ()=>{
      setCountInterval((previousState)=>previousState +1)
      // setYPosition((previousState)=>previousState + 10)
     }
    let id = setInterval(tick,100)
    return ()=>{
      clearInterval(id)
    }
  },[])

  useEffect(()=>{
    setYPosition(yPosition + 5)
    setXPosition(xPosition + 5)
  },[countInterval])

  useEffect(( )=>{
    if(yPosition >280) {
      setDY(-5)
      setYPosition(250)
    }
    if(yPosition <5) {
      setDY(5)
      setYPosition(5)
    }
    if(xPosition >280) {
      setDX(-5)
      setXPosition(250)
    }
    if(xPosition < 5) {
      setDX(5)
      setXPosition(5)
    }
  }, [yPosition, xPosition])
  
  const updateCount1 = () => {
    setCount1(count1 + 1)
  };
  useInterval(updateCount1, 100)

  return (
    <div className="App">
      <h1>About Mike</h1>

      <h2>Work History</h2>

      <h3>Soccer Ref</h3>
      <p>Was a soccer ref</p>

      <h3>Construction Hand/ Welder</h3>
      <p>built things 10 years</p>

      <h2>Contact info:</h2>
      <p>LinkedIn</p>

      <h2>Animation</h2>
      <h3>animation Count: {countInterval}</h3>
      <h3>animation Count1: {count1}</h3>
      <div style={{width:'300px', height:'300px', border:'1px solid black', position:'relative'}}>
        <div style={{position:'absolute', top:yPosition, left:xPosition}}>dvd</div>
      </div>
    </div>
  );
}

export default App;
