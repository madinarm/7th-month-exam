import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    favourite: JSON.parse(localStorage.getItem("makeup-fav")) || [],
    cart: JSON.parse(localStorage.getItem("makeup-cart")) || [],
    currency: JSON.parse(localStorage.getItem("makeup-currency")) || [],
}
const productsSlice = createSlice({
    name: "Makeup",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favourite.push(action.payload)
            localStorage.setItem("makeup-fav", JSON.stringify(state.favourite))
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            localStorage.setItem("makeup-cart", JSON.stringify(state.cart))
        },
    }
})
export const {addToFavorite, addToCart} = productsSlice.actions
export default productsSlice.reducer
