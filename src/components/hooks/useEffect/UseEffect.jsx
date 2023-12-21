import React, { useEffect, useState } from 'react'
const url = 'https://jsonplaceholder.typicode.com/users'

const UseEffectComponent = () => {
  const [value, setvalue] = useState([])

  const fetchData = async ()=>{
    try{
        const resposive = await fetch(url)
        const users = await resposive.json()
        console.log(users);
        setvalue(users)
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div>
      {
        value.map(item=>{
          return(
            <p>{item.name} </p>
          )
        })
      }
    </div>
  )
}

export default UseEffectComponent


