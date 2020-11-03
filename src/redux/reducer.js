const initialState = {
    items: []
}

const ADD_CART = "ADD_CART"

export const addcart = (text) => ({
    type: ADD_CART,
    payload: text
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                items: [ ...state.items,action.payload ]
            }
        default:
            return state 
    }
}

export default reducer