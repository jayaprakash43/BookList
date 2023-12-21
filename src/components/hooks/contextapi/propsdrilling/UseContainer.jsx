import React from 'react'

const UseContainer = ({user,logout}) => {
  return (
    <div className='user-container'>
        {
            user ?(
                <>
                    <p>hello there,{user.name.toUpperCase()} </p>
                    <button onClick={logout}>logout</button>
                </>
            ):(
                <p>please login</p>
            )
        }
      
    </div>
  )
}

export default UseContainer
