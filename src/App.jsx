import React from 'react'
import Header from './Header/Header'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from "./Commponents/Home/Home.jsx"
 
const App = () => {
  return (
    <div>
      <Router>   {/* ✅ Router sabse upar */}
        <Header />   {/* ✅ Header ab Router ke andar */}
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}
 
export default App