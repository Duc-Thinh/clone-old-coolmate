const initialState = {
    items: []
}

const ADD_CART = "ADD_CART"
const DELE_CART = "DELE_CART"

export const addcart = (text) => ({
    type: ADD_CART,
    payload: text
})

export const deletecart = (index) => ({
    type: DELE_CART,
    payload: index
})


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                items: [ ...state.items,action.payload ]
            }
        case "DELE_CART":
            state.items.splice(action.payload, 1)
            return {
                ...state,
                items: [ ...state.items ]
            }
        default:
            return state 
    }
}

export default reducer