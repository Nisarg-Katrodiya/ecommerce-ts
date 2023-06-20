/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from './user.interface';

export interface IInitialUserState {
  fetching: boolean;
  users: IUser[];
  error: any;
}
export interface IInitialProductState {
  fetching: boolean;
  products: any[];
  categories: string[],
  productById: any[]
  error: any;
}
export interface IInitialCartState {
  fetching: boolean;
  toggle: boolean;
  cartList: any[];
  error: any;
}