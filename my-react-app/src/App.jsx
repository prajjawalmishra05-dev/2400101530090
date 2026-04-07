
import './App.css'


function App(){
  let data ="Demo"
  function updata(){
    data = "Example"
    alert(data)
  }

  return(
    
    <div>
      <h1>Example of arrow functon </h1>
      <h1>{data}</h1>
      <button onClick={updata}>click to updata</button>       
    </div>
  )
}

export default App