import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo} from './component/Demo'

function App() {
  // const [count, setCount] = useState(0)
  const name="JHON";
  let x=10;
  let y=20;
  function fun()
  {
    return "inside funfunction"
  }
  function sum(a,b)
  {
    return a+b;
  }
  function calc(a,b,op)
  {
    
    
    return a+b;
    else
      return a-b;
     
  }
  return (
    
    <div>
      
      <h1>User variable with jsx</h1>
      <h3>value of variable{name}</h3>
      
      <h2>{x+y}</h2>
      <h1>use of function with jsx</h1>
      <h2>fun(prajjawal)</h2>
      <h3>example of paramitarised function {sum(20,20)}</h3>
      <h3>value of output {calc(20,10)}</h3>
      
    </div>
  )
}

export default App