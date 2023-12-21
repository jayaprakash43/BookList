import React from 'react'
import { NavContext } from './Navbar2'

const UseContainer = () => {
    const {user,logout} = NavContext()
    console.log(user,'user');
    console.log(logout,'logout');
  return (
    <div className='user-container'>
        {
           user ?(
            <>
                <p>Hello There,{user.name.toUpperCase()} {console.log(user.name)} </p>
                <button type='button' onClick={logout}>logout</button>
                
            </>
        ):(
            <p>please login</p>
           
        )
        }
      
    </div>
  )
}

export default UseContainer
