import * as  actionTypes from "./actionTypes"

export function addToBasket(cartItem){
return {
    type:actionTypes.ADD_TO_BASKET,payload:cartItem
}
}

export function removeFromBasket(product){
    return{
        type:actionTypes.REMOVE_FROM_BASKET,payload:product
    }
}