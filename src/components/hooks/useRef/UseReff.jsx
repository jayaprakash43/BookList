import React, { useRef } from 'react'

const UseReff = () => {

    const inputRef = useRef()

    const clickingButton  = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clickingButton}>Focus Btn</button>
    </div>
  )
}

export default UseReff
