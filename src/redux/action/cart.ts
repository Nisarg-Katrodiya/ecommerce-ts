/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HasError, FetchCart, AddCartProduct, DeleteCartProduct } from '../reducer/Cart';

export const addProduct = (prams: any) => async (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        dispatch(FetchCart());
        try {
            if (prams) {
                dispatch(AddCartProduct(prams));
                resolve(prams);
            }
        } catch (error) {
            console.log('error: ', error);
            dispatch(HasError('error'));
            reject();
        }
    });

export const DeleteCart = (cartData: any, cart: any[]) => async (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        const index = cart.findIndex((row: any) => row.id === cartData.id)
        dispatch(FetchCart());
        try {
            if (index !== -1) {
                const newArray = cart.filter((data) => data.id !== cartData.id)
                dispatch(DeleteCartProduct(newArray));
                resolve(newArray);
            }
        } catch (error) {
            console.log('error: ', error);
            dispatch(HasError('error'));
            reject();
        }
    });
