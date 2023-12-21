import React, { useState } from 'react'

function ButtonUstate() {
    const [value,setvalue] = useState(0)
  return (
    <div>
      <h1>value : {value}</h1>
      <button onClick={()=>{setvalue(value+1)}}>increament</button>
      <button onClick={()=>{setvalue(value-1)}}>decreament</button>
    </div>
  )
}

export default ButtonUstate
