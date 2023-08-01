import { createAction, Action} from "@ngrx/store"

export const counterAction = {
    increment: createAction('[Counter] Increment'),
    decrement: createAction('[Counter] Decrement')
}