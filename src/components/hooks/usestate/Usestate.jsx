import React, { useState } from 'react'

const Usestate = ()=>{

    const [value,setvalue] = useState(false)
    return (
       <div>
            {value && <h1>Achivers IT</h1>}
            <button onClick={setvalue}>clik me</button>
       </div>
    )
}

export default Usestate
