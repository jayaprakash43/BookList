import React from 'react'
import { ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT } from './staste'
import { contanctDeatils } from './staste'



const ReducerFunction = (state = ContacttDetails,action) => {
    if(action.type === DELETE_CONTACT){
        let deleteState = state.filter((item)=>item.id === action.payload.id)
        return {...state,contacts : deleteState}
    }
    if(action.type === ADD_CONTACT){
        let updateState = state.push(payload.id)
        return { ...state , contacts : updateState}
    }
    if(action.type === EDIT_CONTACT){
      
    }
  return (
    <div>
      
    </div>
  )
}

export default ReducerFunction
