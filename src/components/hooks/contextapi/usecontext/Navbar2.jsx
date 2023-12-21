import React, { createContext, useContext, useState } from 'react'
import NavLinks from './NavLinks2'

const AppContext = createContext()
export const NavContext = ()=>useContext(AppContext)

const SecondNavbar = () => {
    const [user, setUser] = useState({name:'Anupama'});
    const logout = ()=>{
        setUser(null);
    }
  return (
    <AppContext.Provider value={{user,logout}}>

      <nav>
          <h5>CONTEXT API</h5>
          <NavLinks />
      </nav>

    </AppContext.Provider>
  )
}

export default SecondNavbar
