
import{Routes,Route} from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import RegistrationPage from './components/Registration'
import Registration from './components/Registration'
import Login from './components/Login'

function App() {
  

  return (
    <>
    
     <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reg' element={<Registration/>}/>
      <Route path='/log' element={<Login/>}/>
      

    </Routes>
    </>
    
   
    
      
        
    
  )
}

export default App
