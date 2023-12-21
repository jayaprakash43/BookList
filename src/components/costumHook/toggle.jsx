// import React, { useState } from 'react'
import UseToggle from './UseToggle'

const CostumToggle = () => {
    // const [show,setShow] = useState(false)
    const {show , toggle} = UseToggle(false)

    // const handdleToggle = ()=>{
    //     setShow(!show)
    // }
  return (
    <div>
        <h1>Costom Hook</h1>
        {/* <button onClick={handdleToggle}>Toggle</button> */}
        <button onClick={toggle}>Toggle</button>
        {show && <h1>Yuo are Toggle in</h1>}
    </div>
  )
}

export default CostumToggle
