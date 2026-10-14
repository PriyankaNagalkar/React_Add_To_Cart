import { ADD_TO_CART, REMOVE_TO_CART } from '../Constants'

const initialState = {
    cardData: [],
    count: 0
}

export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('reducer', action)
            return {
                ...state,
                cardData: action.data,
                count: state.count + 1
            }
            break;

        case REMOVE_TO_CART:
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0
            }
            break;
        default:
            return state
    }
}