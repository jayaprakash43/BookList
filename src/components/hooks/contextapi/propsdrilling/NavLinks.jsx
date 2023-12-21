import React from 'react'
import UseContainer from './UseContainer'

const NavLinks = ({user,logout}) => {
  return (
    <div>
      <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
      </ul>
      <UseContainer user={user} logout={logout}/>
    </div>
  )
}

export default NavLinks
