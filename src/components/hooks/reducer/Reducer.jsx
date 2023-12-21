
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM, REMOVE_MULTIPLE_ITEMS } from './action'
import { productData } from '../../../data/data'


export const reducer = (state = productData, action) => {
    if (action.type === CLEAR_LIST) {
        return { ...state, people: [] }
    }
    if (action.type === RESET_LIST) {
        return { ...state, people: productData }
    }
    if (action.type === REMOVE_ITEM) {
        let newPeople = state.people.filter((person) => person.id !== action.payload.id)
        return { ...state, people: newPeople }
    }
    if (action.type === REMOVE_MULTIPLE_ITEMS) {
        let delet = productData.splice(0,2)
        return { ...state, people: delet }
    }
    throw new Error(`No Matching "${action.type}" _ action`)
}


