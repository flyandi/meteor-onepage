




UI.registerHelper("navigationLink", function(label) {
	return label.replace(/\W+/g, "").toLowerCase();
});




Template.navigation.helpers({

	navigationItems: function() {

		return _.map(Settings.sections, function(o, i) {
			return o.title;
		});

	},

});



Template.content.helpers({

	contentSections: function() {

		return Settings.sections;
		
	},


	isTemplate: function() {

		return Template[this.template];
	}

})