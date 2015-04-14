/**
 * Meteor One Page Settings
 */

Settings = {


	/*
	 * (logo) Specify a logo for this one page
	 *
	 * Recommendation: Use a SVG for maximum compatibility
	 */

	logo: '/logo.svg',

	copyright: '&copy; 2015',

	sections: [

		{title: 'Welcome', template: 'welcome'},

		{title: 'Products'},

		{title: 'About Us'},

		{title: 'Contact Us'},

	],


	/** 
	 * Goodies
	 */

	sliders: {

		top: [
			{image: '/slider.jpg', text: 'Even has an built in slider'},
			{image: '/slider.jpg', text: 'This is simple to configure'},
			{image: '/slider.jpg', text: 'And doesn\'t take anytime to get running'},
		],
	}


};