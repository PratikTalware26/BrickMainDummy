import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import AllComponents from './Components/AllComponents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReferPage from './Components/ReferPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllComponents/>}/>
        <Route path="/referandearn" element={<ReferPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
