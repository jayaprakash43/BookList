import React, { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
    const [user, setUser] = useState({name:'Anupama'})
    const logout = ()=>{
        setUser(null)
    }
  return (
    <nav>
        <h5>CONTEXT API</h5>
        <NavLinks user={user} logout={logout}/>
    </nav>
  )
}

export default Navbar
