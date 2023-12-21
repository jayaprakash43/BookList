import React, { useReducer } from 'react'
import { reducer } from './Reducer';
import { productData } from '../../../data/data';
import { REMOVE_ITEM,RESET_LIST ,CLEAR_LIST,REMOVE_MULTIPLE_ITEMS} from './action';
const initialState = {people : productData}
const ReducerMethod = () => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const restList = ()=>{
        dispatch({type : RESET_LIST})
        console.log();
    }

    const clearList = ()=>{
        dispatch({type :CLEAR_LIST})
    }

    const removeItem = (id)=>{
        dispatch({type : REMOVE_ITEM, payload:{id}})
    }
    const removeMultiItems = ()=>{
        dispatch({type : REMOVE_MULTIPLE_ITEMS })
    }
  return (
    <div>
        
       {
        state.people.map((person)=>{
            const {id , name} = person;
            return(
                <div key={id}>
                    <h4>{name} </h4>
                    <button onClick={()=>removeItem(id)}>Remove{console.log(id)}</button>
                    <button onClick={removeMultiItems}>Remove Multiple</button>
                </div>
            )
        })
       }
       {
        state.people.length < 1 ? (
            <button onClick={restList}>Reset</button>
        ) :(
            <>
            <br />
            <button onClick={clearList}>Clear</button>
            </>
        )
       }

    </div>
  )
}

export default ReducerMethod
