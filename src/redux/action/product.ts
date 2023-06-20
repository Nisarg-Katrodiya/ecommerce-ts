/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiInstance } from "../../httpClient";
import { HasError, FetchData, GetAllProduct, GetCategories } from '../reducer/Product';

export const fetchProduct = () => async (dispatch: any) =>
	new Promise((resolve: any, reject: any) => {
		dispatch(FetchData());
		apiInstance
			.get('/product')
			.then((res) => {
				dispatch(GetAllProduct(res.data.products));
				resolve(res.data.products);
			})
			.catch((e) => {
				dispatch(HasError(e?.response?.data?.message));
				reject();
			});
	});

	export const fetchProductByCategory = (val: string) => async (dispatch: any) =>
	new Promise((resolve: any, reject: any) => {
		dispatch(FetchData());
		apiInstance
			.get(`/products/category/${val}`)
			.then((res) => {
				dispatch(GetAllProduct(res.data.products));
				resolve(res.data.products);
			})
			.catch((e) => {
				dispatch(HasError(e?.response?.data?.message));
				reject();
			});
	});

export const getProductCategories = () => async (dispatch: any) =>
	new Promise((resolve, reject) => {
		dispatch(FetchData());
		apiInstance
			.get(`/products/categories`)
			.then((res) => {
				dispatch(GetCategories(res.data));
				resolve(res.data);
			})
			.catch((e) => {
				dispatch(HasError(e?.response?.data?.message));
				reject();
			});
	});
