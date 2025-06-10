import React from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './pages/Home/home'
import Coin from './pages/Coin/coin'
import Footer from './components/footer/footer'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinID' element={<Coin/>}/>
      </Routes>
      <Footer/>
      
    </div>
    
  )
}

export default App;