import { createReducer, on } from "@ngrx/store";
import { IProducts } from "../shared/models/Products";
import { addTocart, decrementProduct, incrementProduct, removeItem } from "./cart.action";


export interface cartState {

    products: IProducts[]

}

export const initialCartState: cartState = {
    products: [],

}

export const cartReducer = createReducer(
    initialCartState,
    on(addTocart, (state, action) => {
        const newProducts = [...state.products, action.product]
        return {
            ...state,
            products: newProducts
        }
    }),

    on(incrementProduct, (state, action) => {
        const updatedProduct = state.products.map((product) => {
            if (product.id === action.productID) {
                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            } else {
                return product
            }
        })

        return {
            ...state,
            products: updatedProduct

        }


    }),

    on(decrementProduct, (state, action) => {
        let updatedProduct = state.products.map((product) => {
            if(product.id === action.productID){
                return {
                    ...product,
                    quantity: product.quantity - 1
                }
            }else{
                return product
            }
        })
        return {
            ...state,
            products: []
        }
    }),

    on(removeItem, (state, action) => {
        const updatedProducts = state.products.filter((product) => product.id !== action.productID)
        return {
            ...state,
            products: updatedProducts
        }
    })

)