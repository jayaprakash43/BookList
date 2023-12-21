import React,{useState,useEffect} from 'react'


const UsingUseEffect = () => {
 const [dataValue,setData] = useState([])
 const fetchApi = async ()=>{
  const link = await fetch('https://reqres.in/api/users?page=1')
   await link.json()
  
  .then(function(response){
    console.log(response.data);
    setData(response.data)
    
  })
  
  
 }
  
 useEffect(()=>{
  fetchApi();
 },[])
  return (
    <div>
      <h1>Hello, UseEffect! </h1>
      {
        dataValue.map(item=>{
          return (
            <p>{item.first_name}  {item.last_name} </p>
          )
        })
      }
    </div>
  )
}

export default UsingUseEffect
