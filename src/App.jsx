import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1>Counter App </h1>
            <h2 >{count}</h2>
            <button className='button' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='button' onClick={() => setCount(count - 1)}>Decrement</button>
            <button className='button' onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
