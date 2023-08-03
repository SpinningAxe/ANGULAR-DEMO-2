// import { createReducer, on } from "@ngrx/store"
// import { CatFactSate, counterState } from "../state/cat.state";
// import { counterAction } from "../action/cat.action";

// import { CatFactActions } from "../action/cat.action";

// export const initState: counterState = {
//     count: 0,
//     isLoading: false,
//     error: '',
    
// }
// export const counterReducer = createReducer(initState,
//     on(counterAction.increment,(state)=>{
//         return{...state,count: state.count++}
//     }),
//     on(counterAction.increment,(state)=>{
//         return{...state,count: state.count--}
//     })
//     );

// export const intitialState: CatFactSate = (
//     catFacts: [],
//     isLoading: false,
//     error: '',
// )

// export const catFactReducer = createReducer(
//     initialState,
//     on(CatFactActions, loadCatFacts, (state)=>({...state,loading : true}));
//     on(CatFactActions, loadCatFactsSuccess, (state)=>({}))
// )