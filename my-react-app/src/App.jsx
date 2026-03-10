import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo} from './component/Demo'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>PRAJJAWAL</h1>
      <Employee></Employee><Example></Example>
      <Demo></Demo>


    </>
  )
}

function Employee(){
  return(
    <>
    <h2>I am prajjawal from prayagraj</h2>
    </>
  )
}

function Example(){
  return(
    <h2>hello everyone</h2>
    
  )
}

export default App
