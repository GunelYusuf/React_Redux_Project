import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function addToBasket(state = initialState.basket, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      let addedItem = state.find((p) => p.product.id === action.cartItem.id);
      if (addedItem) {
          let newState = state.map(cartItem=>{
              if (cartItem.product.id===action.cartItem.product.id) {
                  return Object.assign({},addedItem,{quantity:addedItem.quantity++})
              }
              return cartItem;
          })
          return newState;
      }else{
          [...state,{...action.payload}]
      }

    default:
  }
}
