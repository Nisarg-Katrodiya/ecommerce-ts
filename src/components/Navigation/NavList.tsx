type Route = {
	key: string,
	title: string,
	path: string,	
	type: string[]
}

export const routes: Array<Route> = [
	{
		key: 'login-route',
		title: 'Login',
		path: '/login',
		type: ['auth']
	},
	{
		key: 'register-route',
		title: 'Register',
		path: '/register',
		type: ['auth']
	},
	{
		key: 'product-route',
		title: 'Products',
		path: '/Products',
		type: ['admin']
	},
]