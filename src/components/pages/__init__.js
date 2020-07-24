import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Contacts from './contacts'
import Services from './services'


const routes = [
	{
		component: Home,
		path: '/',
	},
	{
		component: About,
		path: '/about-us',
	},
	{
		component: Contacts,
		path: '/contacts',
	},
	{
		component: Portfolio,
		path: '/portfolio',
	},
	{
		component: Services,
		path: '/services',
	},
]

const links = [
	{
		text: 'Home',
		to: '/',
	},
	{
		text: 'About Us',
		to: '/about-us',
	},
	{
		text: 'Portfolio',
		to: '/portfolio',
	},
	{
		text: 'Contacts',
		to: '/contacts',
	},
	{
		text: 'Services',
		to: '/services',
	},
]

export { routes, links }
