import React from 'react'

const Navbar = () => {
  return (
    <div style={{display : 'flex',gap : '20px',listStyle : 'none'}}>
      <li>
        <a href='/' style={{textDecoration : 'none',color : 'black'}}>Home</a>
      </li>
      <li>
        <a href="../pages/About" style={{textDecoration : 'none',color : 'black'}}>About</a>
      </li>
      <li>
        <a href="../pages/Contact" style={{textDecoration : 'none',color : 'black'}}>Contact</a>
      </li>
    </div>
  )
}

export default Navbar
