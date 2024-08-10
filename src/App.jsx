import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // React hooks
  let [counter, setCounter] = useState(0)

  //let counter=15;

  const addValue = () => {
    counter=counter+1;
    setCounter(counter)
    console.log("value added", counter);
  }

  const removeValue = () => {

    if(counter>0){
    counter=counter-1;
    setCounter(counter)
    }

    console.log("value deleted", counter);
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
