import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo} from './component/Demo'

function App(){
  const[count, setCount]= useState(0)


  function callpen()
    {
        alert("function called")
    }

  function fruit()
    {
        alert("you are click on apple button")
    }
  function fruit()
    {
        alert("you are click on mango button")
    }
  
  return(
    
    <div>
      <button onClick={fruit}>APPLE</button>
      <button onClick={fruit}>MANGO</button>

      <button onClick={callpen}>click</button>
      <h1>welcome in new project</h1>
      
    </div>
  )
}

export default App