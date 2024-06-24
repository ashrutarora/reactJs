import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    
    if (counter + 1 > 20){
      alert("Value cant be more than 20")
    }
    else{
      counter = counter + 1
      setCounter(counter)
    }
  }

  const subValue = () => {
    
    if (counter-1 < 0){
      alert("Value cant be less than 0")
    }
    else{
      counter = counter - 1
      setCounter(counter)
      
    }    
  }

  return (
    <>
      <h1>react with ax.rut</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue} >+ value {counter + 1}</button>
      <br />
      <br />
      <button onClick={subValue}>- value {counter - 1}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
