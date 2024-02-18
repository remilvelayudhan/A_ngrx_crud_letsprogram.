import { createSelector } from "@ngrx/store";
import { appState } from "../app.state";
import { cartState } from "./cart.reducer";




export const selectCartState = (state:appState) => state.cart;

export const selectCartProducts= createSelector(
    selectCartState,
    (state:cartState)=>state.products
)