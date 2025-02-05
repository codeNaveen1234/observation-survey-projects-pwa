import { createAction, props } from "@ngrx/store";

export const AddToList = createAction('[list] add to cart',props<any>())