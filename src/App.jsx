import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import AllComponents from './Components/AllComponents';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AllComponents/>
    </div>
  )
}

export default App
