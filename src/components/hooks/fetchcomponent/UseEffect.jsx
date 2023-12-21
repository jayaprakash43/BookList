import React, { useEffect, useState } from 'react'

const TaskFetchCompo = () => {
    const [load,setlaoding] = useState([])
    const [loading, useSetloading] = useState(false)
    useEffect(()=>{
        const myFunction = async  ()=>{
           const details = await fetch('https://api.github.com/users/QuincyLarson')
           const results = await details.json()
           .then(function(response){
            console.log( response);
            setlaoding(response)
           })
           if(!loading){
            return <h1>Loading.....</h1>
           }
        }
        myFunction()
    },[])
    
  return (
    <div>
      <center>
        <img src={load.avatar_url} alt="" />
        <h1>{load.name}</h1>
        <p><b>{load.company} </b></p>
        <p>{load.bio} </p>
      </center>
    </div>
  )
}

export default TaskFetchCompo
