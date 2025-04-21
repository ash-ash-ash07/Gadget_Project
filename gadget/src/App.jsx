
import{Routes,Route} from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  

  return (
    <>
    
     <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      

    </Routes>
    </>
    
   
    
      
        
    
  )
}

export default App
