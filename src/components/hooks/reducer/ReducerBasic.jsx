import React, { useReducer } from 'react'
const  initialState = {
    count : 0
};

const reducer = (state,action) => {

    if(action === 'increament'){
        return { count : state.count + 1}
    }
    if(action === 'decreament'){
        return { count : state.count - 1}
    }else{
        throw new Error('Unkown action type')
     }
}
const Counter = ()=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const handleIncreament = ()=>{
        dispatch('increament')
        
    }
    const handleDecreament =()=>{
        dispatch('decreament')
    }
    return(
        <center>
            <h1>{state.count} </h1>
            <button onClick={handleIncreament}>increament</button>
            <button onClick={handleDecreament}>decreament</button>

        </center>
    )
}
export default Counter


