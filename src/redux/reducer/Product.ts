import { IUser } from './../../interface/user.interface';
import { IInitialProductState } from '../../interface/reducer.interface';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState: IInitialProductState = {
    fetching: false,
    categories: [],
    products: [],
    productById: [],
    error: {},
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // Loading
        FetchData(state) {
            state.fetching = true;
        },
        // Has Error
        HasError(state, action: PayloadAction<string>) {
            state.fetching = false;
            state.error = action.payload;
        },
        // Fetch categories
        GetCategories(state, action: PayloadAction<string[]>) {
            state.fetching = false;
            state.categories = action.payload;
        },
        // Fetch products
        GetAllProduct(state, action: PayloadAction<IUser[]>) {
            state.fetching = false;
            state.products = action.payload;
        },
        GetproductById(state, action: PayloadAction<IUser[]>) {
            state.fetching = false;
            state.productById = action.payload;
        },
        // Add products
        AddProduct(state, action: PayloadAction<IUser>) {
            state.fetching = false;
            state.products = [...state.products, action.payload];
        },
        // Update products
        UpdateProduct(state, action: PayloadAction<IUser[]>) {
            state.fetching = false;
            state.products = action.payload;
        },
        // delete product
        // DeleteProduct(state, action: PayloadAction<IUser>) {
        //     state.fetching = false;
        //     const updatedUserList: IUser[] = state.products?.filter((user: IUser) => user.id !== action.payload.id);
        //     state.products = updatedUserList;
        // },
        // Clear products
        DeleteAllProduct(state) {
            state.fetching = false;
            state.products = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { HasError, FetchData, GetCategories, GetAllProduct, AddProduct, UpdateProduct, DeleteAllProduct } = productSlice.actions

export default productSlice.reducer