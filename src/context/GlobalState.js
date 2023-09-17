import React, {createContext,useReducer} from 'react'
import { AppReducer } from './AppReducer'

const initialState ={
    transactions:[
        {id:1,text:'Flower',amount:-20},
        {id:2,text:'Salary',amount:+300},
        {id:3,text:'Book',amount:-10},
        {id:4,text:'Camera',amount:+150}
    ]
}
//reducer function is a pure function that takes the current state and an action as arguments. It returns new state based on these two parameters
const reducer = (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[...state.transactions,action.payload]
            }
        default:
            return state
    }
}
export const GlobalContext = createContext(initialState);
//Provider component

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <GlobalContext.Provider value={{transactions:state.transactions,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
