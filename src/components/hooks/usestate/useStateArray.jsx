import React,{useState} from 'react'
import { product } from '../../../data/product'
// import { productData } from '../data/data'




function UseStateArray () {
    const [firstvalue,setvalue] = useState(product)
    const [secondvalue,secondsetvalue] = useState('')

    const idRemoval =(id)=>{

        console.log(id);
        let remove = firstvalue.filter(pro=>pro.id !== id)
        console.log(remove);
        setvalue(remove)
    }

    const addingValue = (error)=>{
        if(secondvalue === ""){
          console.log('Enter Somthing',error);
        }else{
            let addingObject = {
                name : secondvalue
            }
            firstvalue.push(addingObject)
            // console.log(addingObject);
            secondsetvalue('')
        }
    }
   
  return (
    <div>
        {
            firstvalue.map((item)=>{
                return (
                    <div>
                        <p>{item.name} </p>
                        {/* <p>{item.id} </p> */}
                        <button onClick={()=>idRemoval(item.id)}> Remove</button>
                        
                    </div>
                )
            })
        }
        <br />
        <br />
        <div>
            <input type="search" placeholder='Enter Something' value={secondvalue} onChange={(event)=>{secondsetvalue(event.target.value)}}/><br />
            <button onClick={()=>{setvalue([])}}>Clear All</button>
            <button onClick={addingValue}>  Add Value</button>
        </div>


       
    </div>
  )
}

export default UseStateArray
