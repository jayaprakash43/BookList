import React, { useState } from 'react'

const UseToggle = (defualtValue) => {
    const [show,setShow] = useState(defualtValue)
    const toggle  = ()=>{
        setShow(!show)
       
    }
  return ( {show, toggle})
}

export default UseToggle
