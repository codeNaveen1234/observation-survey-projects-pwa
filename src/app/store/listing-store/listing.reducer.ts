import { createReducer, on } from "@ngrx/store";
import { AddToList} from "./listing.action";

export const intialState:any = {
    listing:[],
    page : 1,
    scrollPosition:0
};
export const listReducer = createReducer(
    intialState,
    on(AddToList,(state,props) => {
        console.log("props",props)
        return {
            ...state,
            listing:props.listing,
            page:props.page,
            scrollPosition:props.scrollPosition
        }
    }),
)