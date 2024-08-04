import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    favorites: [],
    userInfo: null,

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // voir si le produit existe déjà
            const productFind = state.products.find(product => product.id === action.payload.id)

            // si oui, on augmente la quantité
            if (productFind) {
                productFind.quantity += action.payload.quantity
                // si non, on l'ajoute
            } else {
                state.products.push(action.payload)
            }
        },

        removeTocart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        resetCart: (state) => {
            state.products = []
        },

        // incrementer la quantité d'un produit
        increment: (state, action) => {
            const productFind = state.products.find(product => product.id === action.payload.id)
            if (productFind && productFind.quantity < productFind.stock) {
                productFind.quantity += 1
            }
        },

        // décrementer la quantité d'un produit
        decrement: (state, action) => {
            const productFind = state.products.find(product => product.id === action.payload.id)
            if (productFind && productFind.quantity > 1) {
                productFind.quantity -= 1
            }
        },

        // option de connexion
        loginUser: (state, action) => {
            state.userInfo = action.payload
        },
        // option de déconnexion
        logoutUser: (state) => {
            state.userInfo = null
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeTocart, resetCart, increment, decrement, loginUser, logoutUser } = cartSlice.actions

export const cartReducer = cartSlice.reducer