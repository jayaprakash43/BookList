
import React from "react"
import { useSelector , useDispatch } from "react-redux"

const Counter = () => {
  const value = useSelector((state)=>state.counter)
  const show = useSelector((state)=>state.toggle)

  const dispatch = useDispatch()

  const incrementBtn = ()=>{
    dispatch({type : 'INCREAMENT'})
  }
  const decrementBtn = ()=>{
    dispatch({type : 'DECREMENT'})
  }
  const toggle = ()=>{
    dispatch({type : 'TOGGLE'})
  }
  return (
    <div>
      {show && <h1>Value : {value}</h1>}
      <button onClick={incrementBtn}>increment</button>
      <button onClick={decrementBtn}>decrement</button>
      <button onClick={toggle}>Show/Hide the Value</button>
    </div>
  )
}

export default Counter
