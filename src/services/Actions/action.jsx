import { ADD_TO_CART } from '../Constants'
import { REMOVE_TO_CART } from '../Constants'

export function addToCart(data) {
    console.log('action', data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export function removeToCart() {
    return {
        type: REMOVE_TO_CART
    }
}


// export function removeToCart(data) {
//     return {
//         type:'REMOVE_TO_CART',
//         data: data
//     }
// }
