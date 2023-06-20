// import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { FC } from "react";
import Dashboard from './pages/Dashboard';
// import Products from './pages/products';
import ProductDetail from './pages/products/productDetail';
import Checkout from './pages/chekout/Checkout';
import Cart from './components/cart/index'
type Route = {
	key: string,
	title: string,
	path: string,
	enabled: boolean,
	component: FC
}

export const routes: Array<Route> = [

	// Authentication routes
	{
		key: 'login-route',
		title: 'Login',
		path: '/login',
		enabled: true,
		component: LogIn
	},
	{
		key: 'register-route',
		title: 'Register',
		path: '/register',
		enabled: true,
		component: Register
	},

	// Application routes
	{
		key: 'app-home',
		title: 'Home',
		path: '/',
		enabled: true,
		component: Dashboard
	},
	{
		key: 'app-product',
		title: 'products',
		path: '/products',
		enabled: true,
		component: Dashboard
	},
	{
		key: 'app-category-product',
		title: 'Category products',
		path: '/products/:category',
		enabled: true,
		component: Dashboard
	},
	{
		key: 'app-product',
		title: 'Products Detail',
		path: '/product-detail',
		enabled: true,
		component: ProductDetail
	},
	{
		key: 'app-cart',
		title: 'cart',
		path: '/products/cart',
		enabled: true,
		component: Cart
	},
	{
		key: 'app-checkout',
		title: 'checkout',
		path: '/products/checkout',
		enabled: true,
		component: Checkout
	},

	// Admin routes
	// { 
	// 	key: 'notfound-route',
	// 	title: 'Not Found',
	// 	path: '*', 
	// 	enabled: true,
	// 	component: NotFound
	// }
]