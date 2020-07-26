import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Contacts from './contacts'
import Services from './services'


const routes = {
	'Home': {
		path: '/',
		component: Home
	},

	'About': {
		path: '/about-us',
		component: About
	},

	'Contacts': {
		path: '/contacts',
		component: Contacts
	},

	'Portfolio': {
		path: '/portfolio',
		component: Portfolio
	},

	'Services': {
		path: '/services',
		component: Services
	}
}

export { routes }
