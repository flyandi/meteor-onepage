/**
 * Meteor One Page Template
 *
 * The super simple and awesome looking One Page Website Template for Meteor
 *
 */


/**
 * ::globals
 */

UI.registerHelper("opNavigationLink", function(label) {
	return label.replace(/\W+/g, "").toLowerCase();
});

UI.registerHelper("opGetSetting", function(name, _default) {
	return Settings[name] || _default;
});


/**
 * ::navigation
 */

Template.navigation.helpers({

	navigationItems: function() {

		return _.map(Settings.sections, function(o, i) {
			return o.title;
		});

	},

});


/**
 * ::content
 */

Template.content.helpers({

	contentSections: function() {
		return Settings.sections;
	},

	isTemplate: function() {
		return Template[this.template];
	},

})


/**
 * ::slider
 */

Template.slider.helpers({


	getSlides: function() {	

		return Settings.sliders[this.name].slides || false;
	},	

});