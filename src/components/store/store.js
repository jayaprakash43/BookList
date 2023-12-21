
import { createStore } from 'redux'
 
const initialState = {
    counter : 0,
    toggle : false
}

const createReducer = (state = initialState,action)=>{
    if(action.type === 'INCREAMENT'){
        console.log('inccrement',state.counter+1);
        return { ...state , counter : state.counter + 1}
    }
    if(action.type === 'DECREMENT'){
        return { ...state, counter : state.counter - 1}
    }
    else if(action.type === 'TOGGLE'){
        return { ...state, toggle : !state.toggle}
    }
    return state;
}

const store  = createStore(createReducer)


export default store 


