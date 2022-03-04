
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function basketReducer(state = initialState.basket, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      let addedItem = state.find((p) => p.product.id === action.payload.product.id);
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity:addedItem.quantity + 1
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state,{ ...action.payload }];
      }
      case actionTypes.REMOVE_FROM_BASKET:
        const newState2=state.filter(cartItem => cartItem.product.id!==action.payload.id)
        return newState2;
    default:
      return state;
  }
}
