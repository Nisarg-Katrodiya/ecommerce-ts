/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from './../../interface/user.interface';
import { IInitialCartState } from '../../interface/reducer.interface';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState: IInitialCartState = {
    fetching: false,
    toggle: false,
    cartList: [],
    error: {},
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Loading
        FetchCart(state) {
            state.fetching = true;
        },
        // Has Error
        HasError(state, action: PayloadAction<string>) {
            state.fetching = false;
            state.error = action.payload;
        },
        HandleCart(state, action: PayloadAction<boolean>) {
            state.fetching = false;
            state.toggle = action.payload;
        },
        // Fetch cartList
        GetCartProduct(state, action: PayloadAction<any[]>) {
            state.fetching = false;
            state.cartList = action.payload;
        },
        // Add cartList
        AddCartProduct(state, action: PayloadAction<any[]>) {
            state.fetching = false;
            state.cartList = [...state.cartList, { ...action.payload }];
        },
        // Update cartList
        UpdateCartProduct(state, action: PayloadAction<IUser[]>) {
            state.fetching = false;
            state.cartList = action.payload;
        },
        // delete User
        DeleteCartProduct(state, action: PayloadAction<any[]>) {
            console.log(' action.payload: ', action.payload);
            state.fetching = false;
            state.cartList = action.payload;
        },
        // Clear cartList
        DeleteAllCartProduct(state) {
            state.fetching = false;
            state.cartList = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { HasError, FetchCart, HandleCart, DeleteCartProduct, GetCartProduct, AddCartProduct, UpdateCartProduct, DeleteAllCartProduct } = cartSlice.actions

export default cartSlice.reducer