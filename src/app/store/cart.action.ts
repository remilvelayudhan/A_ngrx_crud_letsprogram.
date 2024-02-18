import { createAction, props } from "@ngrx/store";
import { IProducts } from "../shared/models/Products";
export const addTocart =createAction('[cart component] addtocart',props<{product:IProducts}>());
export const incrementProduct =createAction('[cart component] incrementProduct',props<{productID:number}>());
export const decrementProduct =createAction('[cart component] incrementProduct',props<{productID:number}>());
export const removeItem =createAction('[cart component] removeItem',props<{productID:number}>())