import { createReducer, on } from "@ngrx/store"
import { counterState } from "../state/counter.state";
import { counterAction } from "../action/counter.action";

export const initState: counterState = {
    count: 0,
    isLoading: false,
    error: '',
    
}
export const counterReducer = createReducer(initState,
    on(counterAction.increment,(state)=>{
        return{...state,count: state.count++}
    }),
    on(counterAction.increment,(state)=>{
        return{...state,count: state.count--}
    })
    );