import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav style={{padding:'10px', backgroundColor:'#f3f3f3', display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <span style={{color:'white',fontSize:'80px'}}>E-Kart</span>
          </div>
            <Link to="/" style={{color:'white',fontSize:'25px',marginRight:'10px'}}>Home</Link>
            <Link to="/reg" style={{color:'white',fontSize:'25px',marginRight:'10px'}}>Register</Link>
            <Link to="/log" style={{color:'white',fontSize:'25px',marginRight:'10px'}}>Login</Link>
            
        </nav>
    </div>
  )
}

export default NavBar